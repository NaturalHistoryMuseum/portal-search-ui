<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. bombus united kingdom' }"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-input label="Taxonomy or synonym" grid-class="taxonomy-all">
    <zoa-input
      zoa-type="textbox"
      label="Taxonomy or synonym"
      label-position="none"
      :options="{ placeholder: 'e.g. lysandra coridon or carabidae' }"
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
    label="Preservative"
    :options="{
      placeholder: 'e.g. slide',
      options: preservativeOptions,
      enableSearch: true,
    }"
    v-model="preservative"
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

  <div class="divider">Origin</div>
  <zoa-input
    zoa-type="textbox"
    label="Location"
    :options="{ placeholder: 'e.g. tring or south america or coordinates' }"
    v-model="location"
  />
  <zoa-input
    zoa-type="textbox"
    label="Collector or donor"
    :options="{ placeholder: 'e.g. cockayne' }"
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
    :options="{ placeholder: 'e.g. icollections or hms beagle' }"
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
import { expandedTaxonomyEnt } from './assets/schemas';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-ent');

const typeStatusOptions = ref([
  { value: 'Type', order: 0 },
  { value: 'Nontype', order: 1 },
  { value: 'Paratype', order: 2 },
  { value: 'Syntype', order: 3 },
  { value: 'Holotype', order: 4 },
  { value: 'Paralectotype', order: 5 },
  { value: 'Lectotype', order: 6 },
  { value: 'Allotype', order: 7 },
  { value: 'Neoparatype', order: 8 },
  { value: 'Cotype', order: 9 },
]);
const subdepartmentOptions = ref([
  { value: 'Lepidoptera', order: 0 },
  { value: 'Small orders', order: 1 },
  { value: 'Diptera and siphonaptera', order: 2 },
  { value: 'Coleoptera', order: 3 },
  { value: 'Hymenoptera', order: 4 },
  { value: 'Molecular collections', order: 5 },
  { value: 'Historical collections - insects', order: 6 },
  { value: 'British and irish herbarium', order: 7 },
]);
const preservativeOptions = ref([
  { value: 'Dry', order: 0 },
  { value: 'Mounted', order: 1 },
  { value: 'Slide', order: 2 },
  { value: 'Pinned', order: 3 },
  { value: 'Frozen', order: 4 },
  { value: 'Pressed', order: 5 },
  { value: 'Spirit', order: 6 },
  { value: 'Carded', order: 7 },
  { value: 'Liquid nitrogen', order: 8 },
  { value: 'Papered', order: 9 },
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
  expandedTaxonomyEnt.map((x) => {
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
const preservative = useTerm('preservative', 'string', 'equals', [
  'preservative',
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
