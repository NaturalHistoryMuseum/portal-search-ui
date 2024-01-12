import { Model } from 'pinia-orm';

export class Package extends Model {
  static entity = 'packages';

  static fields() {
    return {
      id: this.string(''),
      name: this.string(''),
      title: this.string(''),
      resources: this.hasMany(Resource, 'packageId'),
    };
  }
}

export class Resource extends Model {
  static entity = 'resources';

  static fields() {
    return {
      id: this.string(''),
      name: this.string(''),
      version: this.number(0),
      titleField: this.string(''),
      imageField: this.string(''),
      imageDelimiter: this.string(''),
      imageLicence: this.string(''),
      packageId: this.string(''),
      package: this.belongsTo(Package, 'packageId'),
    };
  }
}

export class Group extends Model {
  static entity = 'groups';

  static fields() {
    return {
      id: this.uid(),
      kind: this.string('and'),
      parentId: this.attr(null),
      parent: this.belongsTo(Group, 'parentId'),
      terms: this.hasMany(Term, 'parentId'),
      groups: this.hasMany(Group, 'parentId'),
    };
  }
}

export class Term extends Model {
  static entity = 'terms';

  static fields() {
    return {
      id: this.uid(),
      contentType: this.string(''),
      matchType: this.string(''),
      fieldNames: this.attr([]),
      value: this.attr(null),
      parentId: this.string(''),
      parent: this.belongsTo(Group, 'parentId'),
      widgetId: this.string(''),
      widget: this.belongsTo(Widget, 'widgetId'),
    };
  }
}

export class Widget extends Model {
  static entity = 'widgets';

  static fields() {
    return {
      id: this.uid(),
      zoaType: this.string('empty'),
      classes: this.string(''),
      label: this.string(''),
      labelPosition: this.string('above'),
      help: this.string(''),
      options: this.attr({}),
    };
  }
}
