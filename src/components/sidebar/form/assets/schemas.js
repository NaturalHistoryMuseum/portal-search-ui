const expandedTaxonomyBase = [
  {
    widget: {
      zoaType: 'textbox',
      label: 'Kingdom',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-kingdom',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['kingdom'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Phylum',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-phylum',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['phylum'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Class',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-class',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['class'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Order',
      help: '',
      options: {
        placeholder: 'order',
      },
    },
    term: {
      id: 'taxonomy-order',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['order'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Family',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-family',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['family'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Genus',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-genus',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['genus'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Species',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-species',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['specificEpithet'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Infraspecies',
      help: '',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-infraspecies',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: ['infraspecificEpithet'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Clade/Other',
      help: 'Clade or other rank that is not specified above, e.g. subphylum.',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-clade',
      contentType: 'string',
      matchType: 'contains',
      fieldNames: ['higherClassification', 'scientificName'],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Synonyms',
      help: 'Other names or determinations.',
      options: {
        placeholder: '',
      },
    },
    term: {
      id: 'taxonomy-synonym',
      contentType: 'string',
      matchType: 'contains',
      fieldNames: ['determinationNames'],
    },
  },
];

export const expandedTaxonomyAll = expandedTaxonomyBase.map((x) => {
  const placeholders = {
    'taxonomy-kingdom': 'e.g. animalia',
    'taxonomy-phylum': 'e.g. chordata',
    'taxonomy-class': 'e.g. mammalia',
    'taxonomy-order': 'e.g. perissodactyla',
    'taxonomy-family': 'e.g. palaeotheriidae',
    'taxonomy-genus': 'e.g. palaeotherium',
    'taxonomy-species': 'e.g. magnum',
    'taxonomy-infraspecies': 'e.g. stehlini',
    'taxonomy-clade': 'e.g. vertebrata',
    'taxonomy-synonym': 'e.g. palaeotherium medium',
  };
  x.widget.options.placeholder = placeholders[x.term.id];
  return x;
});

export const expandedTaxonomyBot = expandedTaxonomyBase.map((x) => {
  const placeholders = {
    'taxonomy-kingdom': 'e.g. plantae',
    'taxonomy-phylum': 'e.g. magnoliophyta',
    'taxonomy-class': 'e.g. liliopsida',
    'taxonomy-order': 'e.g. poales',
    'taxonomy-family': 'e.g. cyperaceae',
    'taxonomy-genus': 'e.g. eleocharis',
    'taxonomy-species': 'e.g. palustris',
    'taxonomy-infraspecies': 'e.g. waltersii',
    'taxonomy-clade': 'e.g. cyperoideae',
    'taxonomy-synonym': 'e.g. eleocharis r.br.',
  };
  x.widget.options.placeholder = placeholders[x.term.id];
  return x;
});

export const expandedTaxonomyEnt = expandedTaxonomyBase.map((x) => {
  const placeholders = {
    'taxonomy-kingdom': 'e.g. animalia',
    'taxonomy-phylum': 'e.g. arthropoda',
    'taxonomy-class': 'e.g. insecta',
    'taxonomy-order': 'e.g. coleoptera',
    'taxonomy-family': 'e.g. anthicidae',
    'taxonomy-genus': 'e.g. stricticomus',
    'taxonomy-species': 'e.g. transversalis',
    'taxonomy-infraspecies': 'e.g. meridionalis',
    'taxonomy-clade': 'e.g. tenebrionoidea',
    'taxonomy-synonym': 'e.g. transversalis',
  };
  x.widget.options.placeholder = placeholders[x.term.id];
  return x;
});

export const expandedTaxonomyMin = [
  {
    widget: {
      zoaType: 'textbox',
      label: 'Name',
      help: '',
      options: {
        placeholder: 'e.g. quartz',
      },
    },
    term: {
      id: 'taxonomy-name',
      contentType: 'string',
      matchType: 'equals',
      fieldNames: [
        'scientificName',
        'identificationAsRegistered',
        'specificEpithet',
      ],
    },
  },
  {
    widget: {
      zoaType: 'textbox',
      label: 'Description',
      help: '',
      options: {
        placeholder: 'e.g. schorl inclusion',
      },
    },
    term: {
      id: 'taxonomy-description',
      contentType: 'string',
      matchType: 'contains',
      fieldNames: ['identificationDescription'],
    },
  },
];

export const expandedTaxonomyPal = expandedTaxonomyBase.map((x) => {
  const placeholders = {
    'taxonomy-kingdom': 'e.g. animalia',
    'taxonomy-phylum': 'e.g. chordata',
    'taxonomy-class': 'e.g. mammalia',
    'taxonomy-order': 'e.g. perissodactyla',
    'taxonomy-family': 'e.g. palaeotheriidae',
    'taxonomy-genus': 'e.g. palaeotherium',
    'taxonomy-species': 'e.g. magnum',
    'taxonomy-infraspecies': 'e.g. stehlini',
    'taxonomy-clade': 'e.g. vertebrata',
    'taxonomy-synonym': 'e.g. palaeotherium medium',
  };
  x.widget.options.placeholder = placeholders[x.term.id];
  return x;
});

export const expandedTaxonomyZoo = expandedTaxonomyBase.map((x) => {
  const placeholders = {
    'taxonomy-kingdom': 'e.g. animalia',
    'taxonomy-phylum': 'e.g. echinodermata',
    'taxonomy-class': 'e.g. echinoidea',
    'taxonomy-order': 'e.g. spatangoidea',
    'taxonomy-family': 'e.g. brissidae',
    'taxonomy-genus': 'e.g. brissopsis',
    'taxonomy-species': 'e.g. lyrifera',
    'taxonomy-infraspecies': 'e.g. capensis',
    'taxonomy-clade': 'e.g. irregularia',
    'taxonomy-synonym': 'e.g. brissopsis capensis',
  };
  x.widget.options.placeholder = placeholders[x.term.id];
  return x;
});
