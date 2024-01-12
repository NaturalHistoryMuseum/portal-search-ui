<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. helianthus netherlands' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input label="Taxonomy or synonym" grid-class="taxonomy-all">
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy or synonym"
      label-position="none"
      :options="{ placeholder: 'e.g. urtica dioica or solanaceae' }"
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
    zoa-type="textbox"
    label="Plant description"
    :options="{ placeholder: 'e.g. tree' }"
    v-model="plantDesc"
  />
  <zoa-input
    zoa-type="textbox"
    label="Habitat description"
    :options="{ placeholder: 'e.g. clay' }"
    v-model="habitatDesc"
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
      placeholder: 'e.g. algae',
      options: subdepartmentOptions,
      enableSearch: true,
    }"
    v-model="subdepartment"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Collection"
    :options="{
      placeholder: 'e.g. sheet',
      options: collectionOptions,
      enableSearch: true,
    }"
    v-model="collection"
  />
  <zoa-input
    zoa-type="textbox"
    label="Exsiccata"
    :options="{
      placeholder: 'e.g. australian algae',
    }"
    v-model="exsiccata"
  />

  <div class="divider">Origin</div>
  <zoa-input
    zoa-type="textbox"
    label="Location"
    :options="{ placeholder: 'e.g. new forest or africa or coordinates' }"
    v-model="location"
  />
  <zoa-input
    zoa-type="textbox"
    label="Collector or donor"
    :options="{ placeholder: 'e.g. hassler' }"
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
    :options="{ placeholder: 'e.g. world brassicales or britannia' }"
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
import { expandedTaxonomyBot } from './assets/schemas';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-bot');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Nontype', order: 1 },
  { value: 'Isotype', order: 2 },
  { value: 'Syntype', order: 3 },
  { value: 'Holotype', order: 4 },
  { value: 'Original', order: 5 },
  { value: 'Lectotype', order: 6 },
  { value: 'Isolectotype', order: 7 },
  { value: 'Isosyntype', order: 8 },
  { value: 'Paratype', order: 9 },
]);
const subdepartmentOptions = ref([
  { value: 'Gen herb', order: 0 },
  { value: 'Flowering plants', order: 1 },
  { value: 'Bryophytes', order: 2 },
  { value: 'British and Irish herbarium', order: 3 },
  { value: 'Algae', order: 4 },
  { value: 'Diatoms', order: 5 },
  { value: 'Pteridophytes', order: 6 },
  { value: 'Ferns', order: 7 },
  { label: 'Lichens', order: 8, value: 'lichen' },
  { label: 'Slime moulds', order: 9, value: 'slime mould' },
  { value: 'Historical collections', order: 10 },
]);
const collectionOptions = ref([
  { value: 'Sheet', order: 0 },
  { value: 'Microscope', order: 1 },
  { value: 'Packet', order: 2 },
  { value: 'Box', order: 3 },
  { value: 'Jar', order: 4 },
  { value: 'Illustration', order: 5 },
  { value: 'Vial', order: 6 },
  { value: 'Photograph', order: 7 },
  { value: 'Plate', order: 8 },
  { value: 'Tree section', order: 9 },
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
  expandedTaxonomyBot.map((x) => {
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
const plantDesc = useTerm('plant-desc', 'string', 'contains', [
  'plantDescription',
]);
const habitatDesc = useTerm('habitat-desc', 'string', 'contains', ['habitat']);

const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'catalogueId',
]);
const subdepartment = useTerm('subdepartment', 'string', 'contains', [
  'subdepartment',
]);
const collection = useTerm('collection', 'string', 'contains', [
  'collectionKind',
  'kindOfCollection',
]);
const exsiccata = useTerm('exsiccata', 'string', 'equals', ['exsiccata']);

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
