// Strapi v5 REST API client - werkt build-time vanuit Astro frontmatter.
// Geen Strapi draaiend? Dan gebruik je gewoon de lokale data uit src/data/.

const STRAPI_URL = (import.meta.env.STRAPI_URL || process.env.STRAPI_URL || '').replace(/\/$/, '');
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN || process.env.STRAPI_TOKEN || '';

export const isStrapiEnabled = !!STRAPI_URL;
export const strapiBaseUrl = STRAPI_URL;

// Strapi geeft media-URLs relatief terug (/uploads/...). Deze functie maakt er een
// absolute URL van zodat Astro ze direct kan gebruiken. Geef je een leeg/absoluut
// pad mee, dan komt die ongewijzigd terug.
export function resolveMediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) return STRAPI_URL ? `${STRAPI_URL}${url}` : url;
  return url;
}

// Helper voor Strapi v5 media-velden die de shape { url, alternativeText } hebben.
export function mediaUrl(field: any): string | undefined {
  if (!field) return undefined;
  if (typeof field === 'string') return resolveMediaUrl(field);
  if (field?.url) return resolveMediaUrl(field.url);
  if (field?.data?.attributes?.url) return resolveMediaUrl(field.data.attributes.url);
  return undefined;
}

type Query = Record<string, string | number | boolean | undefined>;

function buildQuery(q: Query = {}): string {
  const parts: string[] = [];
  for (const [k, v] of Object.entries(q)) {
    if (v === undefined || v === null) continue;
    parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
  }
  return parts.length ? `?${parts.join('&')}` : '';
}

async function strapiFetch<T = any>(path: string, query: Query = {}): Promise<T | null> {
  if (!STRAPI_URL) return null;
  const url = `${STRAPI_URL}/api${path}${buildQuery(query)}`;
  try {
    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
    });
    if (!res.ok) {
      console.warn(`[strapi] ${res.status} on ${path}, falling back to local data`);
      return null;
    }
    const json = (await res.json()) as { data: T };
    return json.data;
  } catch (err) {
    console.warn(`[strapi] fetch failed for ${path}, falling back to local data`, err);
    return null;
  }
}

export async function fetchCollection<T = any>(pluralName: string, query: Query = {}): Promise<T[] | null> {
  const data = await strapiFetch<T[]>(`/${pluralName}`, {
    'pagination[pageSize]': 100,
    'sort[0]': 'displayOrder:asc',
    populate: '*',
    ...query,
  });
  return data;
}

export async function fetchSingle<T = any>(singularName: string, query: Query = {}): Promise<T | null> {
  return strapiFetch<T>(`/${singularName}`, { populate: '*', ...query });
}
