import { Form } from '../form';

const mapping = [
  {
    field: 'middleName',
    index: 9,
  },
];

export const dummyForms: Array<Form> = [
  new Form(
    'Dummy Form 1',
    'SSS',
    {
      name: true,
      address: true,
      contact: true,
      foreignAddress: true,
    },
    '221847745662061',
    mapping
  ),
];

export default {};
