import { Model } from 'pinia-orm';

export class Resource extends Model {
  static entity = 'resources';

  static fields() {
    return {
      id: this.string(''),
      name: this.string(''),
      version: this.number(0),
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
      widgetType: this.string(''),
      helpText: this.string(''),
      value: this.attr(null),
      parentId: this.string(''),
      parent: this.belongsTo(Group, 'parentId'),
    };
  }
}
