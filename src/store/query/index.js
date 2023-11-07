import { defineStore } from 'pinia';
import { get } from '../../utils/api';
import { useRepo } from 'pinia-orm';
import { Package, Resource } from './models';

export const useQueryStore = defineStore('query', () => {
  const resourceRepo = useRepo(Resource);
  const packageRepo = useRepo(Package);

  // get full resource list

  get('current_package_list_with_resources?limit=10000').then((data) => {
    console.log(data);
    data.result
      .filter((p) => p.resources.length > 0)
      .forEach((p) => {
        let resources = p.resources.filter((r) => r.datastore_active);
        if (resources.length === 0) {
          return;
        }
        packageRepo.save({ id: p.id, name: p.name, title: p.title });
        resourceRepo.save(
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
});
