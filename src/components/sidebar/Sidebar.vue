<template>
  <div class="sidebar">
    <ModeTabs v-model="tabs" />
    <div class="sidebar-main">
      <div class="sidebar-header">
        <div class="button-popup help" ref="helpPopup">
          <zoa-toggle-button
            size="sm"
            v-model="showHelp"
            class="toggle-button"
            kind="alt"
          >
            Help
          </zoa-toggle-button>
          <div class="popup" v-if="showHelp">help content</div>
        </div>
        <div class="button-popup query" ref="queryPopup">
          <zoa-toggle-button
            size="sm"
            v-model="showQuery"
            class="toggle-button"
            kind="alt"
            >Query
          </zoa-toggle-button>
          <div class="popup" v-if="showQuery">
            <code> query goes here </code>
          </div>
        </div>
        <template v-if="resources.length > 0">
          <div class="button-popup resources" ref="resourcesPopup">
            <zoa-toggle-button
              size="sm"
              v-model="showResources"
              class="toggle-button"
              kind="alt"
              >Resources
            </zoa-toggle-button>
            <zoa-input
              zoa-type="multiselect"
              label="Select resources"
              label-position="none"
              class="popup"
              :options="{
                options: resources,
                itemName: 'resource',
                enableSearch: true,
              }"
              v-show="showResources"
              v-model="selectedResources"
            />
          </div>
          <span class="resource-desc">{{ resourceDesc }}</span>
        </template>
      </div>
      <div class="sidebar-form">
        <FormComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ZoaToggleButton, ZoaInput } from '@nhm-data/zoa';
import { useRepo } from 'pinia-orm';
import { Resource } from '../../store/query/models';
import { computed, ref, defineAsyncComponent } from 'vue';
import ModeTabs from './ModeTabs.vue';
import { onClickOutside } from '@vueuse/core/index';
import { Loading, Error } from '../loading';

const tabs = ref(null);

// popups
const showResources = ref(false);
const showQuery = ref(false);
const showHelp = ref(false);
const resourcesPopup = ref(null);
const queryPopup = ref(null);
const helpPopup = ref(null);

onClickOutside(resourcesPopup, () => {
  showResources.value = false;
  if (selectedResources.value.length === 0) {
    // selecting nothing is the same as selecting everything
    selectedResources.value = resources.value.map((r) => r.value);
  }
});
onClickOutside(queryPopup, () => {
  showQuery.value = false;
});
onClickOutside(helpPopup, () => {
  showHelp.value = false;
});

// resources
const resourceRepo = useRepo(Resource);
const selectedResources = ref([]);

const resources = computed(() => {
  let res;
  const repoStub = resourceRepo.with('package');

  try {
    switch (tabs.value[0]) {
      case 'specimens':
        res = repoStub
          .where('id', (v) => {
            return [
              '05ff2255-c38a-40c9-b657-4ccb55ab2feb',
              'bb909597-dedf-427d-8c04-4c02b3a24db3',
            ].includes(v);
          })
          .get();
        break;
      case 'media':
        res = repoStub
          .where('imageField', (v) => {
            return !!v;
          })
          .get();
        break;
      case 'datasets':
        res = [];
        break;
      default:
        res = repoStub.get();
    }
  } catch {
    res = [];
  }

  setTimeout(() => {
    selectedResources.value = res.map((r) => r.id);
  }, 0); // this looks pointless but it doesn't work otherwise

  return res.map((r) => {
    return {
      label: r.name,
      value: r.id,
      group: r.package.title,
    };
  });
});

const resourceDesc = computed(() => {
  if (selectedResources.value.length === 0) {
    return;
  }
  if (
    tabs.value &&
    tabs.value[0] === 'specimens' &&
    selectedResources.value.length <= 2
  ) {
    return (
      'searching in ' +
      selectedResources.value
        .map((r) => resourceRepo.find(r).name)
        .join(' and ')
    );
  }
  return `searching in ${selectedResources.value.length} resources`;
});

// form
function loadComponent(importFunction) {
  return defineAsyncComponent({
    loader: importFunction,
    loadingComponent: Loading,
    delay: 200,
    errorComponent: Error,
    timeout: 10000,
  });
}

const SpecimensAll = loadComponent(() => import('./form/SpecimensAll.vue'));
const SpecimensBot = loadComponent(() => import('./form/SpecimensBot.vue'));
const SpecimensEnt = loadComponent(() => import('./form/SpecimensEnt.vue'));
const SpecimensMin = loadComponent(() => import('./form/SpecimensMin.vue'));
const SpecimensPal = loadComponent(() => import('./form/SpecimensPal.vue'));
const SpecimensZoo = loadComponent(() => import('./form/SpecimensZoo.vue'));
const Unimplemented = loadComponent(() => import('./form/Unimplemented.vue'));

const FormComponent = computed(() => {
  try {
    if (tabs.value[0] === 'specimens') {
      switch (tabs.value[1]) {
        case 'all':
          return SpecimensAll;
        case 'bot':
          return SpecimensBot;
        case 'ent':
          return SpecimensEnt;
        case 'min':
          return SpecimensMin;
        case 'pal':
          return SpecimensPal;
        case 'zoo':
          return SpecimensZoo;
        default:
          return Unimplemented;
      }
    } else {
      return Unimplemented;
    }
  } catch {
    return Unimplemented;
  }
});
</script>

<style lang="scss">
@import '../palette';

.sidebar {
  overflow-y: scroll;
  border-right: 2px solid $primary;
  padding: 0 5px;
}

.sidebar-main {
  padding: 10px 5px;
  margin-left: 4em;
}

.sidebar-header {
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  position: relative;
  margin-bottom: 1em;
  align-items: center;

  & .resource-desc {
    flex-grow: 1;
    font-size: 0.7em;
    font-style: italic;
    color: $grey;
  }
}

.button-popup {
  & > .popup {
    position: absolute;
    width: 98%;
    left: 1%;
    margin-top: 10px;
  }

  &.query > .popup,
  &.help > .popup {
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
  }

  & .toggle-button {
    white-space: nowrap;
  }
}

.extra-header {
  display: contents;
}

.sidebar-form {
  display: grid;
  gap: 1em;
  padding: 8px;
}
</style>
