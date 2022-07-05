export interface IFields {
  name: boolean;
  address: boolean;
  contact: boolean;
  foreignAddress: boolean;
}

export interface IJotformMapping {
  field: string;
  index: number;
}

export class Form {
  ref?: string;

  name: string;

  category: string;

  fields: IFields;

  jotformId: string;

  mappings: Array<IJotformMapping>;

  constructor(
    name: string,
    category: string,
    fields: IFields,
    jotformId: string,
    mappings: Array<IJotformMapping>
  ) {
    this.name = name;
    this.category = category;
    this.fields = fields;
    this.ref = name + category;
    this.jotformId = jotformId;
    this.mappings = mappings;
  }
}

export default {};
