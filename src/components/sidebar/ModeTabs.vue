<template>
  <div class="mode-tabs">
    <ul class="tabs--main">
      <li v-for="tab in mainTabOptions" class="tab">
        <input type="radio" :value="tab" v-model="mainTab" :id="`tab-${tab}`" />
        <label tabindex="0" :for="`tab-${tab}`">
          <span>
            {{ tab }}
          </span>
        </label>
      </li>
    </ul>
    <ul class="tabs--sub">
      <li v-for="tab in subTabOptions" class="tab">
        <input
          type="radio"
          :value="tab"
          v-model="subTab"
          :id="`subtab-${tab}`"
        />
        <label tabindex="0" :for="`subtab-${tab}`">
          <span>
            {{ tab }}
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQueryStore } from '../../store/query';

const queryStore = useQueryStore();

const props = defineProps({
  modelValue: {
    type: Array,
  },
});
const emit = defineEmits(['update:modelValue']);

const tabOptions = ref({
  specimens: ['all', 'bot', 'ent', 'min', 'pal', 'zoo'],
  samples: ['all'],
  datasets: [],
  media: ['images', 'specimens', 'documents', 'drawers', '3d'],
  advanced: [],
  saved: [],
});
const mainTabOptions = computed(() => {
  return Object.keys(tabOptions.value);
});
const subTabOptions = computed(() => {
  return tabOptions.value[mainTab.value];
});

const _subTab = ref(null);
const subTab = computed({
  get() {
    return _subTab.value || subTabOptions.value[0];
  },
  set(newTab) {
    _subTab.value = newTab;
    emit('update:modelValue', [mainTab.value, newTab]);
    queryStore.setRootGroup(`${mainTab.value}-${newTab || 'main'}`);
  },
});
const _mainTab = ref(null);
const mainTab = computed({
  get() {
    return _mainTab.value || Object.keys(tabOptions.value)[0];
  },
  set(newTab) {
    const subTabs = tabOptions.value[newTab];
    subTab.value = subTabs.length > 0 ? subTabs[0] : null;
    _mainTab.value = newTab;
    emit('update:modelValue', [newTab, subTab.value]);
    queryStore.setRootGroup(`${newTab}-${subTab.value || 'main'}`);
  },
});

// initialise
if (!_mainTab.value) {
  mainTab.value = Object.keys(tabOptions.value)[0];
}
</script>

<style lang="scss">
.mode-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-right: 1em;
  height: 100%;
  width: 4em;
  position: fixed;
}

.tabs--main,
.tabs--sub {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 0;
  margin: 0;
}

.tabs--main {
  border-right: 2px solid #f2bab0;
  & > .tab label {
    border-radius: 5px 0 0 5px;
  }
}

.tabs--sub {
  border-left: 2px solid #f2bab0;
  & > .tab label {
    border-radius: 0 5px 5px 0;
  }
}

.tab {
  display: block;
  width: 100%;
  writing-mode: vertical-lr;

  & input {
    display: none;

    &:checked + label {
      background: #f2bab0;
    }
  }

  & label {
    background: #e0e0e0;
    padding: 10px 0;
    cursor: pointer;
    width: 100%;
    display: flex;

    & > span {
      margin: auto;
    }
  }
}
</style>
