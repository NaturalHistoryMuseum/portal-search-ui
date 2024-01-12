<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. lepidoptera brazil' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input
    label="Taxonomy, synonym, or description"
    grid-class="taxonomy-all"
  >
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy, synonym, or description"
      label-position="none"
      :options="{ placeholder: 'e.g. felis catus or felidae' }"
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
    :options="{ placeholder: 'e.g. anning' }"
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
    :options="{ placeholder: 'e.g. birdwing digitisation or hms beagle' }"
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
import { ref, computed } from 'vue';
import { useQueryStore } from '../../../store/query';
import { useTerm, useDateTerm } from './assets/common';
import { expandedTaxonomyAll } from './assets/schemas';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-all');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Non-type', order: 1 },
  { value: 'Paratype', order: 2 },
  { value: 'Holotype', order: 3 },
  { value: 'Syntype', order: 4 },
  { value: 'Isotype', order: 5 },
  { value: 'Lectotype', order: 6 },
  { value: 'Paralectotype', order: 7 },
  { value: 'Original material', order: 8 },
  { value: 'Isolectotype', order: 9 },
  { value: 'Cotype', order: 10 },
  { value: 'Figured', order: 11 },
  { value: 'Isosyntype', order: 12 },
]);

const expandTaxonomy = ref(false);

const everything = useTerm('everything', 'string', 'equals', ['*']);

const taxonomyAll = useTerm('taxonomy-all', 'string', 'equals', [
  'scientificName',
  'higherClassification',
  'currentScientificName',
]);
const expandedTaxonomy = ref(
  expandedTaxonomyAll.map((x) => {
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

const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'catalogueId',
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
