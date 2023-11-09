<template>
  <zoa-textbox
    label="Search everything"
    placeholder="e.g. lepidoptera brazil"
    v-model="everything"
  />

  <div class="divider">Attributes</div>
  <zoa-empty
    label="Taxonomy, synonym, or description"
    grid-class="taxonomy-all"
  >
    <zoa-textbox
      label="Taxonomy, synonym, or description"
      label-position="none"
      placeholder="e.g. felis catus or felidae"
      v-model="taxonomyAll"
    />
    <zoa-toggle-button
      v-model="expandTaxonomy"
      title="Search by individual taxonomic ranks"
    >
      <fa-icon :icon="expandTaxonomy ? 'fa-minus' : 'fa-plus'" />
    </zoa-toggle-button>
  </zoa-empty>
  <template v-if="expandTaxonomy">
    <zoa-textbox
      label="Kingdom"
      placeholder="e.g. animalia"
      v-model="taxonomyKingdom"
    />
    <zoa-textbox
      label="Phylum"
      placeholder="e.g. chordata"
      v-model="taxonomyPhylum"
    />
    <zoa-textbox
      label="Class"
      placeholder="e.g. mammalia"
      v-model="taxonomyClass"
    />
    <zoa-textbox
      label="Order"
      placeholder="e.g. perissodactyla"
      v-model="taxonomyOrder"
    />
    <zoa-textbox
      label="Family"
      placeholder="e.g. palaeotheriidae"
      v-model="taxonomyFamily"
    />
    <zoa-textbox
      label="Genus"
      placeholder="e.g. palaeotherium"
      v-model="taxonomyGenus"
    />
    <zoa-textbox
      label="Species"
      placeholder="e.g. magnum"
      v-model="taxonomySpecies"
    />
    <zoa-textbox
      label="Infraspecies"
      placeholder="e.g. stehlini"
      v-model="taxonomyInfraspecies"
    />
  </template>
  <zoa-multiselect
    label="Type status"
    placeholder="e.g. paratype"
    :options="typeStatusOptions"
    :enable-search="true"
    v-model="typeStatus"
  />

  <div class="divider">Catalogue</div>
  <zoa-textbox
    label="ID"
    placeholder="catalogue ID, barcode, occurrence ID, etc"
    v-model="specimenId"
  />

  <div class="divider">Origin</div>
  <zoa-textbox
    label="Location"
    placeholder="e.g. penrhyn mine or europe or coordinates"
    v-model="location"
  />
  <zoa-textbox
    label="Collector or donor"
    placeholder="e.g. anning"
    v-model="collectorDonor"
  />
  <zoa-empty label="Collection date" grid-class="collection-date">
    <zoa-date-ambiguous
      label="Collection date start"
      label-position="none"
      class="collection-date-start"
      v-model="collectionDateStart"
    />
    <span class="date-separator">to</span>
    <zoa-date-ambiguous
      label="Collection date end"
      label-position="none"
      class="collection-date-end"
      v-model="collectionDateEnd"
    />
  </zoa-empty>
  <zoa-textbox
    label="Project or expedition"
    placeholder="e.g. birdwing digitisation or hms beagle"
    v-model="projectExpedition"
  />

  <div class="divider">Resources</div>
  <zoa-checkbox
    label="Only specimens with media"
    label-position="right"
    v-model="hasMedia"
  />
</template>

<script setup>
import {
  ZoaTextbox,
  ZoaMultiselect,
  ZoaDateAmbiguous,
  ZoaEmpty,
  ZoaCheckbox,
  ZoaToggleButton,
} from '@nhm-data/zoa';
import { ref, computed } from 'vue';
import { useQueryStore } from '../../../store/query';
import { useTerm } from './common';

const queryStore = useQueryStore();
queryStore.resetGroup('specimens-all');

const typeStatusOptions = ref([
  {
    value: 'NonType',
    order: 0,
  },
  {
    value: 'Type',
    order: 1,
  },
  {
    value: 'Paratype',
    order: 2,
  },
  {
    value: 'Holotype',
    order: 3,
  },
  {
    value: 'Syntype',
    order: 4,
  },
]);

const expandTaxonomy = ref(false);

const everything = useTerm('everything', 'string', 'equals', ['*']);

const taxonomyAll = useTerm('taxonomy-all', 'string', 'equals', [
  'scientificName',
  'higherClassification',
  'currentScientificName',
]);
const taxonomyKingdom = useTerm('taxonomy-kingdom', 'string', 'equals', [
  'kingdom',
]);
const taxonomyPhylum = useTerm('taxonomy-phylum', 'string', 'equals', [
  'phylum',
]);
const taxonomyClass = useTerm('taxonomy-class', 'string', 'equals', ['class']);
const taxonomyOrder = useTerm('taxonomy-order', 'string', 'equals', ['order']);
const taxonomyFamily = useTerm('taxonomy-family', 'string', 'equals', [
  'family',
]);
const taxonomyGenus = useTerm('taxonomy-genus', 'string', 'equals', ['genus']);
const taxonomySpecies = useTerm('taxonomy-species', 'string', 'equals', [
  'specificEpithet',
]);
const taxonomyInfraspecies = useTerm(
  'taxonomy-infraspecies',
  'string',
  'equals',
  ['infraspecificEpithet'],
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
const collectionDateStart = useTerm(
  'collection-date-start',
  'date',
  'from',
  [],
);
const collectionDateEnd = useTerm('collection-date-end', 'date', 'to', []);
const projectExpedition = useTerm('project-expedition', 'string', 'contains', [
  'project',
  'expedition',
]);

const hasMedia = useTerm('has-media', 'exists', null, ['associatedMedia']);
</script>

<style lang="scss">
@import 'form';
@import '../../vars';

.taxonomy-all {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: $padding;
  align-items: center;
}

.collection-date {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: $padding;
  align-items: center;
}

.zoa__dateambiguous__datePopup {
  width: 350px;
}

.collection-date-end .zoa__dateambiguous__datePopup {
  left: unset;
  right: 0;
}
</style>
