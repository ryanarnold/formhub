import { Form } from '../form';

const mapping = [
  {
    field: 'firstName',
    index: 6,
  },
  {
    field: 'middleName',
    index: 7,
  },
  {
    field: 'lastName',
    index: 4,
  },
  {
    field: 'suffix',
    index: 8,
  },
  {
    field: 'telephoneNumber',
    index: 9,
  },
  {
    field: 'mobileNumber',
    index: 10,
  },
  {
    field: 'emailAddress',
    index: 11,
  },
  {
    field: 'addressRoom',
    index: 12,
  },
  {
    field: 'addressHouse',
    index: 13,
  },
  {
    field: 'addressStreetName',
    index: 14,
  },
  {
    field: 'addressSubdivision',
    index: 15,
  },
  {
    field: 'addressBarangay',
    index: 16,
  },
  {
    field: 'addressCity',
    index: 17,
  },
  {
    field: 'addressProvince',
    index: 18,
  },
  {
    field: 'addressZipCode',
    index: 19,
  },
];

export const dummyForms: Array<Form> = [
  new Form(
    'Member Registration Form',
    'PhilHealth',
    {
      name: true,
      motherName: true,
      spouseName: true,
      birth: true,
      sex: true,
      civilStatus: true,
      citizenship: true,
      address: true,
      mailingAddress: true,
      contact: true,
      foreignAddress: false,
      philHealthMemberType: true,
      monthlyIncome: true,
      proofOfIncome: true,
    },
    '1',
    mapping
  ),
];

export default {};
