export interface IFields {
  name: boolean;
  address: boolean;
  contact: boolean;
  foreignAddress: boolean;
}

export class Form {
  name: string;

  category: string;

  fields: IFields;

  constructor(name: string, category: string, fields: IFields) {
    this.name = name;
    this.category = category;
    this.fields = fields;
  }
}

export default {};
