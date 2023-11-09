import { computed } from 'vue';
import { useQueryStore } from '../../../store/query';

export function useTerm(termKey, contentType, matchType, fieldNames) {
  const queryStore = useQueryStore();
  return computed({
    get() {
      let term = queryStore.termRepo.find(termKey);
      return term ? term.value : null;
    },
    set(newValue) {
      if (!!newValue) {
        queryStore.termRepo.save({
          id: termKey,
          value: newValue,
          contentType,
          matchType,
          fieldNames,
          parentId: queryStore.rootGroup.id,
        });
      } else {
        queryStore.termRepo.destroy(termKey);
      }
    },
  });
}
