export interface IFields {
  name: boolean;
  motherName: boolean;
  spouseName: boolean;
  birth: boolean;
  sex: boolean;
  civilStatus: boolean;
  citizenship: boolean;
  address: boolean;
  mailingAddress: boolean;
  contact: boolean;
  foreignAddress: false;
  philHealthMemberType: boolean;
  monthlyIncome: boolean;
  proofOfIncome: boolean;
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
