import { computed } from 'vue';
import { useQueryStore } from '../../../../store/query';

export function useTerm(termKey, contentType, matchType, fieldNames) {
  const queryStore = useQueryStore();
  return computed({
    get() {
      let term = queryStore.termRepo.find(termKey);
      return term ? term.value : null;
    },
    set(newValue) {
      const isAnArray = Array.isArray(newValue);
      const isEmpty = isAnArray
        ? Array.isArray(newValue) && newValue.length === 0
        : newValue == null || newValue === '';

      if (isEmpty) {
        queryStore.termRepo.destroy(termKey);
      } else {
        queryStore.termRepo.save({
          id: termKey,
          value: newValue,
          contentType,
          matchType,
          fieldNames,
          parentId: queryStore.rootGroup.id,
        });
      }
    },
  });
}

export function useDateTerm(termKey, contentType, matchType, fieldNames) {
  const queryStore = useQueryStore();
  return computed({
    get() {
      let term = queryStore.termRepo.find(termKey);
      return term ? term.value : null;
    },
    set(newValue) {
      if (newValue && (newValue.year || newValue.month || newValue.day)) {
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
