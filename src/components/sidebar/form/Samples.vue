<template>
  <zoa-input
    zoa-type="textbox"
    label="Search everything"
    :options="{ placeholder: 'e.g. DNA' }"
    v-model="everything"
  />

  <div class="divider">General</div>
  <zoa-input
    zoa-type="multiselect"
    label="Project"
    :options="{
      placeholder: 'e.g. Darwin Tree of Life',
      options: projectOptions,
      enableSearch: true,
    }"
    v-model="project"
  />

  <div class="divider">Sample Properties</div>
  <zoa-input
    zoa-type="textbox"
    label="Preparation number"
    :options="{ placeholder: 'e.g. BM001163319' }"
    v-model="preparationNumber"
  />
  <zoa-input
    zoa-type="textbox"
    label="Preparation type"
    :options="{ placeholder: 'e.g. tissue' }"
    v-model="preparationType"
  />
  <zoa-input
    zoa-type="textbox"
    label="Preparation contents"
    :options="{ placeholder: 'e.g. leaf' }"
    v-model="preparationContents"
  />
  <zoa-input
    zoa-type="textbox"
    label="Preparation process"
    :options="{ placeholder: 'e.g. desiccation: silica dried' }"
    v-model="preparationProcess"
  />
  <zoa-input
    zoa-type="textbox"
    label="Preparation storage medium"
    :options="{ placeholder: 'e.g. silica gel' }"
    v-model="mediumType"
  />
  <zoa-input
    zoa-type="date-ambiguous"
    label="Preparation date"
    v-model="preparationDate"
  />
  <zoa-input
    zoa-type="textbox"
    label="Preparation purpose"
    :options="{ placeholder: 'e.g. reference genome' }"
    v-model="purpose"
  />

  <div class="divider">Specimen Properties</div>
  <zoa-input
    zoa-type="textbox"
    label="Scientific name"
    :options="{ placeholder: 'e.g. Senecio erucifolius' }"
    v-model="scientificName"
  />
  <zoa-input
    zoa-type="textbox"
    label="Order"
    :options="{ placeholder: 'e.g. Asterales' }"
    v-model="order"
  />
  <zoa-input
    zoa-type="textbox"
    label="Barcode"
    :options="{ placeholder: 'e.g. 015557513' }"
    v-model="barcode"
  />
  <zoa-input
    zoa-type="textbox"
    label="Locality"
    :options="{ placeholder: 'e.g. penrhyn mine or europe or coordinates' }"
    v-model="locality"
  />
  <zoa-input
    zoa-type="textbox"
    label="Identified by"
    :options="{ placeholder: 'e.g. anning' }"
    v-model="identifiedBy"
  />
  <zoa-input
    zoa-type="textbox"
    label="Voucher ID"
    :options="{ placeholder: 'catalogue ID, barcode, occurrence ID, etc' }"
    v-model="specimenId"
  />

  <div class="divider">Resources</div>
  <zoa-input
    zoa-type="checkbox"
    label="Only samples with media"
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
queryStore.resetGroup('sample-all');

const projectOptions = ref([
  { value: 'Darwin Tree of Life', order: 0 },
  { value: 'Cryoarks', order: 1 },
  { value: 'UKBoL', order: 2 },
  { value: 'Freshbase', order: 3 },
]);

const everything = useTerm('everything', 'string', 'equals', ['*']);
const project = useTerm('project', 'string', 'equals', ['project']);
const preparationNumber = useTerm('preparationNumber', 'string', 'equals', [
  'preparationNumber',
]);
const preparationType = useTerm('preparationType', 'string', 'contains', [
  'preparationType',
]);
const preparationContents = useTerm('preparationContents', 'string', 'equals', [
  'preparationContents',
]);
const preparationProcess = useTerm('preparationProcess', 'string', 'contains', [
  'preparationProcess',
]);
const mediumType = useTerm('mediumType', 'string', 'contains', ['mediumType']);
const preparationDate = useTerm('preparationDate', 'date', 'equals', [
  'preparationDate',
]);
const purpose = useTerm('purpose', 'string', 'equals', ['purpose']);
const scientificName = useTerm('scientific-name', 'string', 'contains', [
  'scientificName',
]);
const order = useTerm('order', 'string', 'contains', ['order']);
const barcode = useTerm('barcode', 'string', 'equals', ['barcode']);
const locality = useTerm('locality', 'string', 'equals', [
  'locality',
  'decimalLatitude',
  'decimalLongitude',
]);
const identifiedBy = useTerm('identified-by', 'string', 'contains', [
  'identifiedBy',
]);
const specimenId = useTerm('specimen-id', 'string', 'contains', [
  'associatedOccurrences',
  'specimenId',
]);
const hasMedia = useTerm('has-media', 'exists', null, ['associatedMedia']);
</script>

<style lang="scss">
@import 'assets/specimens';
</style>
