"""Generate single-type schemas for the static-content pages (Werkwijze, Over ons, etc).

Each gets a hero (title + lead + optional cta) plus 1 free-text body block.
The Astro template still owns the visual layout - only the writable text comes from Strapi.
"""
import json
import os
from pathlib import Path

PAGES = [
    {
        "singular": "page-werkwijze",
        "plural": "page-werkwijzes",
        "displayName": "Pagina: Werkwijze",
        "description": "Tekst-content op de pagina /werkwijze. Layout en stappen blijven in de site, alleen de teksten zijn hier aanpasbaar.",
        "attributes": {
            "heroTitle": {"type": "string"},
            "heroLead": {"type": "text"},
            "introCopy": {"type": "text"},
        },
    },
    {
        "singular": "page-over-ons",
        "plural": "page-over-onss",
        "displayName": "Pagina: Over ons",
        "description": "Tekst-content op de pagina /over-ons.",
        "attributes": {
            "heroTitle": {"type": "string"},
            "heroLead": {"type": "text"},
            "originStory": {"type": "text"},
            "valuesIntro": {"type": "text"},
        },
    },
    {
        "singular": "page-abonnement",
        "plural": "page-abonnements",
        "displayName": "Pagina: Abonnement",
        "description": "Tekst-content op de pagina /abonnement.",
        "attributes": {
            "heroTitle": {"type": "string"},
            "heroLead": {"type": "text"},
            "perksIntro": {"type": "text"},
        },
    },
    {
        "singular": "page-franchise",
        "plural": "page-franchises",
        "displayName": "Pagina: Franchise",
        "description": "Tekst-content op de pagina /franchise (homepage van de juristen-zijde).",
        "attributes": {
            "heroTitle": {"type": "string"},
            "heroLead": {"type": "text"},
            "pillarsIntro": {"type": "text"},
        },
    },
]

CTRL = """import {{ factories }} from '@strapi/strapi';
export default factories.createCoreController('api::{s}.{s}');
"""
ROUTES = """import {{ factories }} from '@strapi/strapi';
export default factories.createCoreRouter('api::{s}.{s}');
"""
SVC = """import {{ factories }} from '@strapi/strapi';
export default factories.createCoreService('api::{s}.{s}');
"""

base = Path("src/api")
for p in PAGES:
    s = p["singular"]
    schema = {
        "kind": "singleType",
        "collectionName": p["plural"].replace("-", "_"),
        "info": {
            "singularName": s,
            "pluralName": p["plural"],
            "displayName": p["displayName"],
            "description": p["description"],
        },
        "options": {"draftAndPublish": True},
        "pluginOptions": {},
        "attributes": p["attributes"],
    }
    api_dir = base / s
    (api_dir / "content-types" / s).mkdir(parents=True, exist_ok=True)
    (api_dir / "content-types" / s / "schema.json").write_text(json.dumps(schema, indent=2))
    for sub, tpl in [("controllers", CTRL), ("routes", ROUTES), ("services", SVC)]:
        (api_dir / sub).mkdir(parents=True, exist_ok=True)
        (api_dir / sub / f"{s}.ts").write_text(tpl.format(s=s))
    print(f"  + {s}")
print(f"Generated {len(PAGES)} page single-types")
