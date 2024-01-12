import { defineStore } from 'pinia';
import { get } from '../../utils/api';
import { useRepo } from 'pinia-orm';
import { Package, Resource, Group, Term, Widget } from './models';
import { ref, computed } from 'vue';

export const useQueryStore = defineStore('query', () => {
  const resourceRepo = computed(() => useRepo(Resource));
  const packageRepo = computed(() => useRepo(Package));
  const groupRepo = computed(() => useRepo(Group));
  const termRepo = computed(() => useRepo(Term));
  const widgetRepo = computed(() => useRepo(Widget));

  const _rootGroup = ref(null);
  const rootGroup = computed({
    get() {
      if (!_rootGroup.value) {
        return;
      }
      return groupRepo.value.withAll().find(_rootGroup.value.id);
    },
    set(newRoot) {
      _rootGroup.value = newRoot;
    },
  });

  function resetAll() {
    groupRepo.value.flush();
    termRepo.value.flush();
    rootGroup.value = groupRepo.value.save({}); // new root
  }

  function _findSubItems(group) {
    let terms = [...group.terms];
    let groups = [];
    group.groups.forEach((g) => {
      groups = groups.concat(_findSubItems(g));
    });
    return { terms, groups };
  }

  function resetGroup(rootGroupKey) {
    let root = groupRepo.value.withAllRecursive().find(rootGroupKey);
    if (root) {
      let { terms, groups } = _findSubItems(root);
      terms.forEach((t) => termRepo.value.destroy(t.id));
      groups.forEach((g) => groupRepo.value.destroy(g.id));
    } else {
      groupRepo.value.save({ id: rootGroupKey });
    }
  }

  function setRootGroup(rootGroupKey) {
    let root = groupRepo.value.find(rootGroupKey);
    if (root) {
      rootGroup.value = root;
    } else {
      rootGroup.value = groupRepo.value.save({ id: rootGroupKey });
    }
  }

  function init() {
    // get full resource list
    get('current_package_list_with_resources?limit=10000').then((data) => {
      data.result
        .filter((p) => p.resources.length > 0)
        .forEach((p) => {
          let resources = p.resources.filter((r) => r.datastore_active);
          if (resources.length === 0) {
            return;
          }
          packageRepo.value.save({ id: p.id, name: p.name, title: p.title });
          resourceRepo.value.save(
            resources.map((r) => {
              return {
                id: r.id,
                name: r.name,
                version: 0,
                titleField: r._title_field || '_id',
                imageField: r._image_field,
                imageDelimiter: r._image_delimiter || '',
                imageLicence: r._image_licence,
                packageId: p.id,
              };
            }),
          );
        });
    });

    resetAll();
  }

  return {
    init,
    widgetRepo,
    termRepo,
    groupRepo,
    resourceRepo,
    packageRepo,
    rootGroup,
    resetAll,
    resetGroup,
    setRootGroup,
  };
});
