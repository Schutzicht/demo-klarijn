"""Generate Strapi v5 content-type scaffolding for Klarijn demo.

Run from within cms/. Creates src/api/<kebab>/{content-types,controllers,routes,services}.
"""
import json
import os
from pathlib import Path

# Content types: (singular kebab, plural kebab, schema)
TYPES = [
    # --- COLLECTION TYPES ---
    {
        "kind": "collectionType",
        "singularName": "product",
        "pluralName": "products",
        "displayName": "Product",
        "description": "Standaardproducten in de catalogus.",
        "draftAndPublish": True,
        "attributes": {
            "title": {"type": "string", "required": True},
            "slug": {"type": "uid", "targetField": "title", "required": True},
            "intro": {"type": "text"},
            "duration": {"type": "string"},
            "price": {"type": "string"},
            "category": {
                "type": "enumeration",
                "enum": ["arbeid", "contracten", "incasso", "overdracht", "avg"],
            },
            "features": {"type": "json"},
            "process": {"type": "json"},
            "featured": {"type": "boolean", "default": False},
            "displayOrder": {"type": "integer", "default": 0},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "team-member",
        "pluralName": "team-members",
        "displayName": "Team Member",
        "description": "Klarijn-juristen en support.",
        "draftAndPublish": True,
        "attributes": {
            "name": {"type": "string", "required": True},
            "role": {"type": "string"},
            "bio": {"type": "text"},
            "email": {"type": "email"},
            "location": {"type": "string"},
            "type": {
                "type": "enumeration",
                "enum": ["oprichter", "senior", "jurist", "support", "rayonhouder"],
            },
            "photoUrl": {"type": "string"},
            "displayOrder": {"type": "integer", "default": 0},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "dirk-vraagt",
        "pluralName": "dirk-vraagts",
        "displayName": "Dirk Vraagt (Q&A)",
        "description": "Vraag-en-antwoord paren voor de Vraag-het-Klarijn sectie.",
        "draftAndPublish": True,
        "attributes": {
            "who": {"type": "string", "required": True},
            "role": {"type": "string"},
            "question": {"type": "text", "required": True},
            "answer": {"type": "text", "required": True},
            "variant": {
                "type": "enumeration",
                "enum": ["klant", "franchise"],
                "default": "klant",
                "required": True,
            },
            "photoUrl": {"type": "string"},
            "displayOrder": {"type": "integer", "default": 0},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "rayon",
        "pluralName": "rayons",
        "displayName": "Rayon",
        "description": "Geografische rayons waar Klarijn actief is of komt.",
        "draftAndPublish": True,
        "attributes": {
            "city": {"type": "string", "required": True},
            "status": {
                "type": "enumeration",
                "enum": ["actief", "pilot", "beschikbaar", "voorbereiding"],
                "default": "beschikbaar",
            },
            "displayOrder": {"type": "integer", "default": 0},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "testimonial",
        "pluralName": "testimonials",
        "displayName": "Testimonial",
        "description": "Klant- of franchise-quotes.",
        "draftAndPublish": True,
        "attributes": {
            "quote": {"type": "text", "required": True},
            "author": {"type": "string", "required": True},
            "role": {"type": "string"},
            "location": {"type": "string"},
            "photoUrl": {"type": "string"},
            "scenePhotoUrl": {"type": "string"},
            "featured": {"type": "boolean", "default": False},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "decision-question",
        "pluralName": "decision-questions",
        "displayName": "Decision Question",
        "description": "Vragen voor de franchise match-test (beslisboom).",
        "draftAndPublish": True,
        "attributes": {
            "question": {"type": "text", "required": True},
            "options": {"type": "json"},
            "displayOrder": {"type": "integer", "default": 0},
        },
    },
    {
        "kind": "collectionType",
        "singularName": "office",
        "pluralName": "offices",
        "displayName": "Office",
        "description": "Kantoorpagina-template (Zwolle, en later andere rayons).",
        "draftAndPublish": True,
        "attributes": {
            "name": {"type": "string", "required": True},
            "slug": {"type": "uid", "targetField": "name"},
            "city": {"type": "string"},
            "address": {"type": "text"},
            "postalCode": {"type": "string"},
            "phone": {"type": "string"},
            "email": {"type": "email"},
            "hours": {"type": "text"},
            "areaServed": {"type": "json"},
            "intro": {"type": "text"},
            "quote": {"type": "text"},
            "quoteAuthorName": {"type": "string"},
        },
    },
    # --- SINGLE TYPES ---
    {
        "kind": "singleType",
        "singularName": "site-setting",
        "pluralName": "site-settings",
        "displayName": "Site Settings",
        "description": "Globale instellingen: prijzen, contactgegevens, externe URLs.",
        "draftAndPublish": False,
        "attributes": {
            "abonnementPriceMonthly": {"type": "decimal", "default": 145.0},
            "contactPhonePrimary": {"type": "string", "default": "06-51180138"},
            "contactPhoneSecondary": {"type": "string", "default": "06-10903140"},
            "contactEmailMain": {"type": "email", "default": "vraaghet@klarijn.nl"},
            "contactEmailBestelling": {"type": "email", "default": "bestelling@klarijn.nl"},
            "mijnVoortgangUrl": {"type": "string"},
            "companySlogan": {"type": "string", "default": "Vraag het Klarijn"},
            "companyDescription": {"type": "text"},
        },
    },
    {
        "kind": "singleType",
        "singularName": "homepage",
        "pluralName": "homepages",
        "displayName": "Homepage",
        "description": "Hero-content en homepage-specifieke tekst.",
        "draftAndPublish": True,
        "attributes": {
            "heroTitle": {"type": "string"},
            "heroLead": {"type": "text"},
            "heroCtaPrimaryLabel": {"type": "string"},
            "heroCtaPrimaryHref": {"type": "string"},
            "heroCtaSecondaryLabel": {"type": "string"},
            "heroCtaSecondaryHref": {"type": "string"},
            "marqueeItems": {"type": "json"},
            "stats": {"type": "json"},
        },
    },
]

CONTROLLER_TPL = """import {{ factories }} from '@strapi/strapi';

export default factories.createCoreController('api::{singular}.{singular}');
"""

ROUTES_TPL = """import {{ factories }} from '@strapi/strapi';

export default factories.createCoreRouter('api::{singular}.{singular}');
"""

SERVICE_TPL = """import {{ factories }} from '@strapi/strapi';

export default factories.createCoreService('api::{singular}.{singular}');
"""


def write(path: Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)


def main():
    base = Path("src/api")
    for t in TYPES:
        sing = t["singularName"]
        plur = t["pluralName"]
        info = {
            "singularName": sing,
            "pluralName": plur,
            "displayName": t["displayName"],
            "description": t.get("description", ""),
        }
        schema = {
            "kind": t["kind"],
            "collectionName": plur.replace("-", "_"),
            "info": info,
            "options": {"draftAndPublish": t.get("draftAndPublish", True)},
            "pluginOptions": {},
            "attributes": t["attributes"],
        }
        api_dir = base / sing
        write(api_dir / "content-types" / sing / "schema.json", json.dumps(schema, indent=2))
        write(api_dir / "controllers" / f"{sing}.ts", CONTROLLER_TPL.format(singular=sing))
        write(api_dir / "routes" / f"{sing}.ts", ROUTES_TPL.format(singular=sing))
        write(api_dir / "services" / f"{sing}.ts", SERVICE_TPL.format(singular=sing))
        print(f"  + {sing}")
    print(f"Generated {len(TYPES)} content-types.")


if __name__ == "__main__":
    main()
