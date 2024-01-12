<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. topaz australia' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input label="Taxonomy or description" grid-class="taxonomy-all">
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy or description"
      label-position="none"
      :options="{ placeholder: 'e.g. quartz or red clay' }"
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
      placeholder: 'e.g. petrology',
      options: subdepartmentOptions,
      enableSearch: true,
    }"
    v-model="subdepartment"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Collection"
    :options="{
      placeholder: 'e.g. ocean bottom deposits',
      options: collectionOptions,
      enableSearch: true,
    }"
    v-model="collection"
  />

  <div class="divider">Origin</div>
  <zoa-input
    zoa-type="textbox"
    label="Location"
    :options="{ placeholder: 'e.g. penrhyn mine or europe or coordinates' }"
    v-model="location"
  />
  <zoa-input
    zoa-type="textbox"
    label="Collector or donor"
    :options="{ placeholder: 'e.g. ludlam' }"
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
    :options="{ placeholder: 'e.g. aoi or hms challenger' }"
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
import { ZoaToggleButton, ZoaInput } from '@nhm-data/zoa';
import { ref, computed } from 'vue';
import { useQueryStore } from '../../../store/query';
import { useTerm, useDateTerm } from './assets/common';
import { expandedTaxonomyMin } from './assets/schemas';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-min');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Non-type', order: 1 },
]);
const subdepartmentOptions = ref([
  { value: 'Minerals', order: 0 },
  { value: 'Petrology', order: 1 },
  { value: 'Ores', order: 2 },
  { value: 'Meteorites', order: 3 },
]);
const collectionOptions = ref([
  { value: 'Minerals', order: 0 },
  { value: 'Petrology', order: 1 },
  { value: 'Ocean bottom deposits', order: 2 },
  { value: 'Ores', order: 3 },
  { value: 'Building stones', order: 4 },
  { value: 'Meteorites', order: 5 },
  { value: 'Gems', order: 6 },
  { value: 'Impactites', order: 7 },
  { value: 'Tektites', order: 8 },
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
  expandedTaxonomyMin.map((x) => {
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
const collection = useTerm('collection', 'string', 'equals', [
  'collectionKind',
]);

const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'catalogueId',
]);
const subdepartment = useTerm('subdepartment', 'string', 'equals', [
  'subdepartment',
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
