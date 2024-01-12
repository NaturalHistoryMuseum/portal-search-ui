<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. apodemus spain' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input label="Taxonomy or synonym" grid-class="taxonomy-all">
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy or synonym"
      label-position="none"
      :options="{ placeholder: 'e.g. boops boops or chiroptera' }"
      v-model="taxonomyAll"
    />
    <zoa-toggle-button
      v-model="expandTaxonomy"
      title="Search by individual taxonomic ranks"
    >
      <fa-icon :icon="expandTaxonomy ? 'fa-minus' : 'fa-plus'" />
    </zoa-toggle-button>
  </zoa-input>
  <template v-if="expandTaxonomy">
    <zoa-input
      v-for="rank in expandedTaxonomy"
      v-bind="rank.widget"
      v-model="rank.term"
    />
  </template>
  <zoa-input
    zoa-type="multiselect"
    label="Type status"
    :options="{
      placeholder: 'e.g. paratype',
      options: typeStatusOptions,
      enableSearch: true,
    }"
    v-model="typeStatus"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Sex"
    :options="{
      placeholder: 'e.g. undetermined',
      options: sexOptions,
      enableSearch: true,
    }"
    v-model="sex"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Preparation"
    :options="{
      placeholder: 'e.g. spirit',
      options: preparationOptions,
      enableSearch: true,
    }"
    v-model="preparation"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Item type"
    :options="{
      placeholder: 'e.g. egg',
      options: itemTypeOptions,
      enableSearch: true,
    }"
    v-model="itemType"
  />

  <div class="divider">Catalogue</div>
  <zoa-input
    zoa-type="textbox"
    label="ID"
    :options="{ placeholder: 'catalogue ID, barcode, occurrence ID, etc' }"
    v-model="specimenId"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Subdepartment"
    :options="{
      placeholder: 'e.g. small orders',
      options: subdepartmentOptions,
      enableSearch: true,
    }"
    v-model="subdepartment"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Collection"
    :options="{
      placeholder: 'e.g. nest',
      options: collectionOptions,
      enableSearch: true,
    }"
    v-model="collection"
  />

  <div class="divider">Origin</div>
  <zoa-input
    zoa-type="textbox"
    label="Location"
    :options="{ placeholder: 'e.g. naples or north america or coordinates' }"
    v-model="location"
  />
  <zoa-input
    zoa-type="textbox"
    label="Collector or donor"
    :options="{ placeholder: 'e.g. rothschild' }"
    v-model="collectorDonor"
  />
  <zoa-input label="Collection date" grid-class="collection-date">
    <zoa-input
      zoa-type="date-ambiguous"
      label="Collection date start"
      label-position="none"
      class="collection-date-start"
      :options="{
        min: null,
        max: collectionDateStartMax,
      }"
      v-model="collectionDateStart"
    />
    <span class="date-separator">to</span>
    <zoa-input
      zoa-type="date-ambiguous"
      label="Collection date end"
      label-position="none"
      class="collection-date-end"
      :options="{
        min: collectionDateEndMin,
      }"
      v-model="collectionDateEnd"
    />
  </zoa-input>
  <zoa-input
    zoa-type="textbox"
    label="Project or expedition"
    :options="{ placeholder: 'e.g. cryoarks or hms penguin' }"
    v-model="projectExpedition"
  />

  <div class="divider">Resources</div>
  <zoa-input
    zoa-type="checkbox"
    label="Only specimens with media"
    label-position="right"
    v-model="hasMedia"
  />
</template>

<script setup>
import { ZoaInput, ZoaToggleButton } from '@nhm-data/zoa';
import { computed, ref } from 'vue';
import { useQueryStore } from '../../../store/query';
import { useDateTerm, useTerm } from './assets/common';
import { expandedTaxonomyZoo } from './assets/schemas';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-zoo');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Nontype', order: 1 },
  { value: 'Syntype', order: 2 },
  { value: 'Holotype', order: 3 },
  { value: 'Paratype', order: 4 },
  { value: 'Cotype', order: 5 },
  { value: 'Lectotype', order: 6 },
  { value: 'Paralectotype', order: 7 },
  { value: 'Topotype', order: 8 },
  { value: 'Allotype', order: 9 },
]);
const subdepartmentOptions = ref([
  { label: 'Birds', order: 0, value: 'aves|birds' },
  { label: 'Mammals', order: 1, value: 'mammal' },
  { value: 'Mollusca', order: 2 },
  { value: 'Fish', order: 3 },
  { value: 'Crustacea', order: 4 },
  { label: 'Reptiles & amphibians', order: 5, value: 'reptiles|amphibians' },
  { value: 'Cnidaria', order: 6 },
  { value: 'Bryozoa', order: 7 },
  { value: 'Annelida', order: 8 },
  { value: 'Parasitic worms', order: 9 },
]);
const sexOptions = ref([
  { value: 'Male', order: 0 },
  { value: 'Female', order: 1 },
  {
    label: 'Unknown',
    order: 2,
    value: 'unsexed|unknown|undetermined|indeterminate',
  },
  { value: 'Hermaphrodite', order: 3 },
  { value: 'Juvenile', order: 4 },
]);
const preparationOptions = ref([
  {
    label: 'IMS/spirit/ethanol',
    order: 0,
    value: 'ims|spirit|ethanol|alcohol',
  },
  { value: 'Formalin', order: 1 },
  { label: 'Dry', order: 2, value: 'dry|dried' },
  { value: 'Slide', order: 3 },
  { value: 'Glycerine', order: 4 },
  { value: 'Stuffed', order: 5 },
  { value: 'Skeleton', order: 6 },
  { value: 'Dry frozen', order: 7 },
]);
const itemTypeOptions = ref([
  { value: 'Skin', order: 0 },
  { value: 'Skull', order: 1 },
  { value: 'Spirit', order: 2 },
  { value: 'Unknown', order: 3 },
  { value: 'Egg', order: 4 },
  { value: 'Slide', order: 5 },
  { value: 'Wet', order: 6 },
  { value: 'Shell only', order: 7 },
  { value: 'Specimen', order: 8 },
  { value: 'Skeleton', order: 9 },
]);
const collectionOptions = ref([
  { value: 'Bird group parent', order: 0 },
  { value: 'Bird group part', order: 1 },
  { value: 'Egg', order: 2 },
  { value: 'Nest', order: 3 },
  { value: 'Research use', order: 4 },
  { value: 'Box', order: 5 },
  { value: 'Slide', order: 6 },
  { value: 'Specimen', order: 7 },
  { value: 'Wet', order: 8 },
  { value: 'Dry', order: 9 },
]);

const expandTaxonomy = ref(false);

const everything = useTerm('everything', 'string', 'equals', ['*']);

const taxonomyAll = useTerm('taxonomy-all', 'string', 'contains', [
  'scientificName',
  'higherClassification',
  'currentScientificName',
  'determinationNames',
]);
const expandedTaxonomy = ref(
  expandedTaxonomyZoo.map((x) => {
    return {
      widget: x.widget,
      term: useTerm(
        x.term.id,
        x.term.contentType,
        x.term.matchType,
        x.term.fieldNames,
      ),
    };
  }),
);
const typeStatus = useTerm('type-status', 'string', 'equals', ['typeStatus']);
const sex = useTerm('sex', 'string', 'contains', ['sex']);
const preparation = useTerm('preparation', 'string', 'contains', [
  'preparation',
]);
const itemType = useTerm('itemType', 'string', 'contains', ['kindOfObject']);

const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'catalogueId',
]);
const subdepartment = useTerm('subdepartment', 'string', 'equals', [
  'subdepartment',
]);
const collection = useTerm('collection', 'string', 'equals', [
  'kindOfCollection',
  'collectionKind',
]);

const location = useTerm('location', 'geo', null, []);
const collectorDonor = useTerm('collector-donor', 'string', 'contains', [
  'collectedBy',
  'donor',
]);
const collectionDateStart = useDateTerm(
  'collection-date-start',
  'date',
  'from',
  [],
);
const collectionDateEnd = useDateTerm('collection-date-end', 'date', 'to', []);
const projectExpedition = useTerm('project-expedition', 'string', 'contains', [
  'project',
  'expedition',
]);

const hasMedia = useTerm('has-media', 'exists', null, ['associatedMedia']);

const collectionDateStartMax = computed(() => {
  if (collectionDateEnd.value) {
    return collectionDateEnd.value.latest;
  } else {
    return 'today';
  }
});
const collectionDateEndMin = computed(() => {
  if (collectionDateStart.value) {
    return collectionDateStart.value.earliest;
  } else {
    return null;
  }
});
</script>

<style lang="scss">
@import 'assets/specimens';
</style>
