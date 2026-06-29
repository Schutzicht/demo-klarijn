#!/usr/bin/env node
/**
 * Klarijn brand-foto generatie via Nano Banana Pro (Gemini 3 Pro Image).
 *
 * Vervangt de oubollige stockfoto's door warme, editorial Nederlandse
 * mkb-beelden. Eibert (mede-oprichter, gezicht uit /img/eibert.webp) is de
 * herkenbare Klarijn-adviseur in de gespreks-scenes. Klant-portretten zijn
 * eigen personen.
 *
 * Output gaat als PNG naar public/img/_gen/ ; een aparte bash-stap converteert
 * naar de bestaande .jpg-bestandsnamen (sips), zodat de site-code intact blijft.
 *
 * Usage:
 *   node scripts/generate-images.mjs                 # alle ontbrekende
 *   node scripts/generate-images.mjs --force         # alles opnieuw
 *   node scripts/generate-images.mjs --only=scene-handshake --force
 *
 * Vereist GEMINI_API_KEY (shell-env of .env).
 */

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, ".image-src");
const IMG_DIR = path.join(PROJECT_ROOT, "public", "img");

if (!process.env.GEMINI_API_KEY) {
  console.error("\x1b[31mGEMINI_API_KEY is niet gezet.\x1b[0m");
  process.exit(1);
}

const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY = args.find((a) => a.startsWith("--only="))?.split("=")[1];

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/** Gedeelde stijl-handtekening voor elk beeld. */
const BRAND = [
  "Photorealistic editorial photography for Klarijn, a modern Dutch legal-services firm for SMEs, family businesses and manufacturers.",
  "Visual language: warm, human, calm and confident. Real Dutch small-business settings (bright modern office, light oak table, large windows with soft daylight, plants, a workshop or factory faintly visible outside).",
  "Soft natural Northern-European diffuse light, gentle warmth, muted palette with subtle terracotta and aubergine accents in the environment (never as a color cast on skin).",
  "Magazine-quality finish, think Monocle and The Gentlewoman. Candid and authentic, not posed corporate stock, no fake smiles, no exaggerated gestures.",
  "Shot on medium-format camera, 50mm equivalent, natural shallow depth of field.",
  "Absolutely no text, no logos, no watermarks, no captions, no signage. Natural realistic skin texture.",
].join(" ");

const EIBERT = path.join(IMG_DIR, "eibert.webp");

/**
 * Elke entry: { name, prompt, ref?: [paden], aspect }
 * - ref: referentie-afbeeldingen (gezicht van Eibert) die de gegenereerde
 *   persoon moeten matchen.
 */
const IMAGES = [
  {
    name: "scene-handshake",
    aspect: "landscape 3:2",
    ref: [EIBERT],
    prompt:
      "Landscape 3:2. The grey-curly-haired man from the reference photo (around 55, friendly, wearing a light blue shirt with a rust-coloured quilted bodywarmer) warmly greeting a male SME business owner (40s, casual smart) with a relaxed handshake near the entrance of a bright modern office. Mid-shot showing both people from the waist up, eye contact, genuine warmth. Soft daylight from large windows. Out-of-focus warm office interior behind them.",
  },
  {
    name: "scene-discussion",
    aspect: "landscape 3:2",
    ref: [EIBERT],
    prompt:
      "Landscape 3:2. The grey-curly-haired man from the reference photo (light blue shirt, rust bodywarmer) sitting at a light oak table, calmly explaining a single document to a male client (50s, work jacket, hands of someone who works with his hands) sitting across from him. The adviser points at the paper. Natural daylight, modern but down-to-earth office. Candid, focused mood.",
  },
  {
    name: "scene-coffee",
    aspect: "landscape 3:2",
    ref: [EIBERT],
    prompt:
      "Landscape 3:2. The grey-curly-haired man from the reference photo (light blue shirt, rust bodywarmer) in a relaxed, open conversation over coffee with a female entrepreneur (40s) at a light wooden table near a sunny window. Two coffee cups, an open notebook. Easy, human atmosphere, mid-laugh of a real conversation. Soft warm daylight.",
  },
  {
    name: "scene-conversation",
    aspect: "landscape 3:2",
    ref: [EIBERT],
    prompt:
      "Landscape 3:2. The grey-curly-haired man from the reference photo (light blue shirt, rust bodywarmer) sitting at a meeting table in attentive conversation with a couple who run a family business (man and woman, 45-55). He listens, leaning slightly forward. Bright modern Dutch office, plants, large windows. Calm, trustworthy mood.",
  },
  {
    name: "scene-talking",
    aspect: "landscape 3:2",
    ref: [EIBERT],
    prompt:
      "Landscape 3:2. The grey-curly-haired man from the reference photo (light blue shirt, rust bodywarmer) standing beside a younger female colleague (30s, jurist, smart casual) at a standing desk, both looking at the same dossier and discussing it. Collegial, focused. Bright modern legal office with warm wood and daylight.",
  },
  {
    name: "scene-laughing",
    aspect: "portrait 4:5",
    prompt:
      "Portrait 4:5. Authentic portrait of a warm, confident Dutch female business owner around 50, short curly dark hair, smart casual blazer, standing relaxed in her own modern company office. Genuine warm smile, looking at the camera. Soft daylight from large windows, faint warehouse or production floor out of focus behind her. Editorial, real, not corporate stock.",
  },
  {
    name: "p3",
    aspect: "portrait 4:5",
    prompt:
      "Portrait 4:5. Authentic portrait of a Dutch construction-company owner, man around 55, weathered friendly face, short greying hair, wearing a dark work softshell jacket. Standing relaxed, arms loosely crossed, calm confident expression, slight friendly look. Background: out-of-focus building site or workshop with warm daylight. Editorial documentary style, real person, natural skin texture.",
  },

  {
    name: "eibert-hero",
    aspect: "portrait 4:5",
    ref: [EIBERT],
    prompt:
      "Portrait 4:5. A fresh, bright, energetic portrait of the SAME grey-curly-haired man from the reference photo (around 55, friendly confident). Different clothing this time: a crisp light/white open-collar shirt with the sleeves casually rolled up — NO quilted bodywarmer, NOT the blue chambray shirt. Relaxed and approachable, a warm genuine half-smile, standing or leaning casually in a bright, airy modern office with soft natural daylight and a hint of greenery. Clean modern editorial business portrait, natural skin texture, shallow depth of field. Keep him clearly recognisable as the reference man.",
  },

  // --- Oplossing-foto's (vierkant, centraal onderwerp, crop-veilig voor kaart 5:3 én detail 4:5) ---
  {
    name: "op-arbeidscontract",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, subject centered. An employer and a new employee sitting together at a light oak table in a bright workshop office, going through a printed employment contract, a pen resting on the pages. Warm, friendly, real. Soft daylight. Focus on the people and the document.",
  },
  {
    name: "op-incasso",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, subject centered. A focused Dutch small-business owner at a desk, calmly sorting through a stack of overdue invoices and a formal letter, reading glasses, laptop half open. Resolute but not stressed. Warm daylight from a window. Documentary editorial style.",
  },
  {
    name: "op-overdracht",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, subject centered. An older founder (around 65) and his adult daughter (the successor, around 35) standing together in their family manufacturing workshop, looking at each other warmly, hands relaxed. Generational handover feeling. Soft daylight, machinery softly out of focus behind them.",
  },
  {
    name: "op-algemene-voorwaarden",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, top-down still life centered. A neatly printed multi-page terms-and-conditions document on a light oak desk, a quality fountain pen, reading glasses and a cup of coffee beside it. No readable text on the pages, just clean printed lines. Warm daylight, calm and tidy, editorial.",
  },
  {
    name: "op-avg-scan",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, subject centered. Over-the-shoulder view of a professional reviewing a clean abstract privacy checklist / dashboard on a laptop screen (no readable text, just simple graphic blocks and checkmarks) in a bright modern office. Calm, organised. Soft daylight.",
  },
  {
    name: "op-huurovereenkomst",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, centered. The clean facade of a modern Dutch commercial business unit (bedrijfsruimte) with large windows and a roller door, on a quiet business park under soft overcast daylight. Architectural, calm, no text or signage. Editorial real-estate photography.",
  },
  {
    name: "op-merk",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, centered. A maker in a bright workshop holding up a finished product with a small blank hang-tag (no readable logo or text), proud and focused. Suggests a brand being built. Warm daylight, shallow depth of field, editorial.",
  },
  {
    name: "op-aandeelhoudersovereenkomst",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, centered. Two business partners (a man and a woman, 40s) sitting side by side at a meeting table in a bright office, collaborating over a document and a laptop, constructive and equal. Warm daylight, plants, modern Dutch office. Editorial.",
  },
  {
    name: "op-scheiding",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, centered. Two business partners (two men, or a man and a woman, 45-55) sitting across a table in a calm, respectful but serious conversation, a single document between them. Mature, composed mood (a business parting handled well). Soft daylight, modern office, editorial.",
  },
  {
    name: "doeners-puntschoenen",
    aspect: "landscape 16:9",
    prompt:
      "Landscape 16:9, gritty industrial workshop. A pair of WHITE / off-white pointed leather dress shoes ('puntschoenen') clamped tightly IN the steel jaws of a heavy metal bench vise (bankschroef) on a workbench — the shoes are gripped inside the vise jaws, not resting on top. A hand uses an angle grinder on the pointed toe, bright orange sparks flying. Dramatic side light, dark moody workshop background, shoes and vise positioned right-of-centre so the left side stays darker for text. Photorealistic, editorial. No text, no logos, no watermarks.",
  },
  {
    name: "op-uwv",
    aspect: "square 1:1",
    prompt:
      "Square 1:1, centered. A calm HR manager at a tidy desk organising a structured dossier with labeled folders and a checklist (no readable text), bright modern office. Methodical, reassuring. Soft daylight, editorial documentary style.",
  },
];

const filtered = ONLY ? IMAGES.filter((i) => i.name === ONLY) : IMAGES;
if (ONLY && filtered.length === 0) {
  console.error(`Geen image "${ONLY}". Beschikbaar:`);
  IMAGES.forEach((i) => console.error("   " + i.name));
  process.exit(1);
}

function refPart(p) {
  const buf = fs.readFileSync(p);
  const ext = path.extname(p).toLowerCase();
  const mime = ext === ".webp" ? "image/webp" : ext === ".png" ? "image/png" : "image/jpeg";
  return { inlineData: { mimeType: mime, data: buf.toString("base64") } };
}

async function generateOne({ name, prompt, ref, aspect }) {
  const outPath = path.join(OUTPUT_DIR, `${name}.png`);
  if (fs.existsSync(outPath) && !FORCE) {
    console.log(`\x1b[90mskip (bestaat): ${name}.png\x1b[0m`);
    return { name, status: "skip" };
  }
  console.log(`\x1b[36mgenereren: ${name}\x1b[0m`);
  const t0 = Date.now();
  const textPrompt = `${BRAND}\n\nAspect ratio: ${aspect}.\n\n${prompt}` +
    (ref ? "\n\nMatch the face and identity of the person in the provided reference image exactly (same man), keep him recognisable." : "");
  const parts = [{ text: textPrompt }];
  if (ref) ref.forEach((p) => parts.push(refPart(p)));
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: [{ role: "user", parts }],
    });
    const part = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
    if (!part) {
      console.warn(`\x1b[33m  geen beelddata voor ${name}\x1b[0m`);
      return { name, status: "empty" };
    }
    fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, "base64"));
    const secs = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`\x1b[32mopgeslagen: ${name}.png  (${secs}s)\x1b[0m`);
    return { name, status: "ok" };
  } catch (err) {
    console.error(`\x1b[31mmislukt: ${name}  ${err.message}\x1b[0m`);
    return { name, status: "error" };
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`\n${filtered.length} beeld(en) -> ${path.relative(PROJECT_ROOT, OUTPUT_DIR)}/\n`);
  const results = [];
  for (const img of filtered) results.push(await generateOne(img));
  const ok = results.filter((r) => r.status === "ok").length;
  const fail = results.filter((r) => r.status !== "ok" && r.status !== "skip").length;
  console.log(`\nKlaar: ${ok} gegenereerd, ${fail} mislukt.\n`);
  if (fail > 0) process.exit(1);
}

main();
