<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. dictyoconus egypt' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input label="Taxonomy or synonym" grid-class="taxonomy-all">
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy or synonym"
      label-position="none"
      :options="{ placeholder: 'e.g. globigerina bulloides or artiodactyla' }"
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
  <zoa-input label="Geologic age" grid-class="geologic-age-grid">
    <small>earliest</small>
    <zoa-input
      zoa-type="dropdown"
      label="Eon"
      label-position="none"
      :options="{
        placeholder: 'eon',
        options: eonOptions,
      }"
      v-model="fromEon"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Era"
      label-position="none"
      :options="{
        placeholder: 'era',
        options: eraOptions,
      }"
      v-model="fromEra"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Period"
      label-position="none"
      :options="{
        placeholder: 'period',
        options: periodOptions,
      }"
      v-model="fromPeriod"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Epoch"
      label-position="none"
      :options="{
        placeholder: 'epoch',
        options: epochOptions,
      }"
      v-model="fromEpoch"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Age"
      label-position="none"
      :options="{
        placeholder: 'age',
        options: ageOptions,
      }"
      v-model="fromAge"
    />
    <small>latest</small>
    <zoa-input
      zoa-type="dropdown"
      label="Eon"
      label-position="none"
      :options="{
        placeholder: 'eon',
        options: eonOptions,
      }"
      v-model="toEon"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Era"
      label-position="none"
      :options="{
        placeholder: 'era',
        options: eraOptions,
      }"
      v-model="toEra"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Period"
      label-position="none"
      :options="{
        placeholder: 'period',
        options: periodOptions,
      }"
      v-model="toPeriod"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Epoch"
      label-position="none"
      :options="{
        placeholder: 'epoch',
        options: epochOptions,
      }"
      v-model="toEpoch"
    />
    <zoa-input
      zoa-type="dropdown"
      label="Age"
      label-position="none"
      :options="{
        placeholder: 'age',
        options: ageOptions,
      }"
      v-model="toAge"
    />
  </zoa-input>

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
      placeholder: 'e.g. micropalaeontology',
      options: subdepartmentOptions,
      enableSearch: true,
    }"
    v-model="subdepartment"
  />
  <zoa-input
    zoa-type="multiselect"
    label="Collection"
    :options="{
      placeholder: 'e.g. mammals',
      options: collectionOptions,
      enableSearch: true,
    }"
    v-model="collection"
  />

  <div class="divider">Origin</div>
  <zoa-input
    zoa-type="textbox"
    label="Location"
    :options="{ placeholder: 'e.g. pant quarry or asia or coordinates' }"
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
    :options="{ placeholder: 'e.g. emesozoic or hms challenger' }"
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
import { expandedTaxonomyPal } from './assets/schemas';
import geoEras from '../../../store/data/geo_eras.json';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-pal');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Nontype', order: 1 },
  { value: 'Paratype', order: 2 },
  { value: 'Holotype', order: 3 },
  { value: 'Syntype', order: 4 },
  { value: 'Figured', order: 5 },
  { value: 'Cited', order: 6 },
  { value: 'Paralectotype', order: 7 },
  { value: 'Lectotype', order: 8 },
  { value: 'Referred', order: 9 },
]);
const subdepartmentOptions = ref([
  { value: 'Micropalaeontology', order: 0 },
  { value: 'Invertebrates', order: 1 },
  { value: 'Vertebrates', order: 2 },
  { value: 'Mammals', order: 3 },
  { value: 'Echinodermata', order: 4 },
  { value: 'Palaeobotany', order: 5 },
  { value: 'Mollusca', order: 6 },
  { value: 'Fish', order: 7 },
  { value: 'Brachiopoda', order: 8 },
  { value: 'Reptiles', order: 9 },
]);
const collectionOptions = ref([
  { label: 'Mammals', order: 0, value: 'mammal' },
  { value: 'Artefact', order: 1 },
  { value: 'Reptiles', order: 2 },
  { value: 'Aves', order: 3 },
  { value: 'Coral', order: 4 },
]);
const eonOptions = ref(
  geoEras.eon.map((e, i) => ({
    value: e.name,
    order: i,
  })),
);
const eraOptions = ref(
  geoEras.era.map((e, i) => ({
    value: e.name,
    order: i,
  })),
);
const periodOptions = ref(
  geoEras.period.map((e, i) => ({
    value: e.name,
    order: i,
  })),
);
const epochOptions = ref(
  geoEras.epoch.map((e, i) => ({
    value: e.name,
    order: i,
  })),
);
const ageOptions = ref(
  geoEras.age.map((e, i) => ({
    value: e.name,
    order: i,
  })),
);

const expandTaxonomy = ref(false);

const everything = useTerm('everything', 'string', 'equals', ['*']);

const taxonomyAll = useTerm('taxonomy-all', 'string', 'contains', [
  'scientificName',
  'higherClassification',
  'currentScientificName',
  'determinationNames',
]);
const expandedTaxonomy = ref(
  expandedTaxonomyPal.map((x) => {
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
const fromEon = useTerm('from-eon', 'string', 'equals', [
  'earliestEonOrLowestEonothem',
]);
const fromEra = useTerm('from-era', 'string', 'equals', [
  'earliestEraOrLowestErathem',
]);
const fromPeriod = useTerm('from-period', 'string', 'equals', [
  'earliestPeriodOrLowestSystem',
]);
const fromEpoch = useTerm('from-epoch', 'string', 'equals', [
  'earliestEpochOrLowestSeries',
]);
const fromAge = useTerm('from-age', 'string', 'equals', [
  'earliestAgeOrLowestStage',
]);
const toEon = useTerm('to-eon', 'string', 'equals', [
  'latestEonOrHighestEonothem',
]);
const toEra = useTerm('to-era', 'string', 'equals', [
  'latestEraOrHighestErathem',
]);
const toPeriod = useTerm('to-period', 'string', 'equals', [
  'latestPeriodOrHighestSystem',
]);
const toEpoch = useTerm('to-epoch', 'string', 'equals', [
  'latestEpochOrHighestSeries',
]);
const toAge = useTerm('to-age', 'string', 'equals', [
  'latestAgeOrHighestStage',
]);

const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'catalogueId',
]);
const subdepartment = useTerm('subdepartment', 'string', 'contains', [
  'subdepartment',
]);
const collection = useTerm('collection', 'string', 'contains', [
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

.geologic-age-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  align-items: center;

  & > small {
    justify-self: center;
  }
}
</style>
