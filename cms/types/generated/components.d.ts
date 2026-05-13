import type { Schema, Struct } from '@strapi/strapi';

export interface OfficeServiceArea extends Struct.ComponentSchema {
  collectionName: 'components_office_service_areas';
  info: {
    description: 'Een stad of regio waar dit kantoor klanten bedient.';
    displayName: 'Servicegebied';
    icon: 'pin';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_page_marquee_items';
  info: {
    description: 'Een korte tekst die meeloopt in de banner onder de hero.';
    displayName: 'Marquee item';
    icon: 'message';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
  };
}

export interface PageStat extends Struct.ComponentSchema {
  collectionName: 'components_page_stats';
  info: {
    description: "Een cijfer met een label (bv. '14 vaste juristen').";
    displayName: 'Statistiek';
    icon: 'chartPie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TreeAnswerOption extends Struct.ComponentSchema {
  collectionName: 'components_tree_answer_options';
  info: {
    description: 'Een antwoord op een beslisboom-vraag, met punten-score.';
    displayName: 'Antwoord-optie';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    score: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'office.service-area': OfficeServiceArea;
      'page.marquee-item': PageMarqueeItem;
      'page.stat': PageStat;
      'tree.answer-option': TreeAnswerOption;
    }
  }
}
