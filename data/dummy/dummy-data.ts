import { Form } from '../form';

export const dummyForms: Array<Form> = [
  {
    name: 'Dummy Form 1',
    category: 'SSS',
    fields: {
      name: true,
      address: true,
      contact: true,
      foreignAddress: true,
    },
  },
  {
    name: 'Dummy Form 2',
    category: 'SSS',
    fields: {
      name: true,
      address: true,
      contact: true,
      foreignAddress: false,
    },
  },
  {
    name: 'Dummy Form 1',
    category: 'PhilHealth',
    fields: {
      name: true,
      address: false,
      contact: false,
      foreignAddress: false,
    },
  },
  {
    name: 'Dummy Form 2',
    category: 'PhilHealth',
    fields: {
      name: true,
      address: true,
      contact: false,
      foreignAddress: false,
    },
  },
];

export default {};
