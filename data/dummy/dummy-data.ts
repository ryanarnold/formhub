import { Form } from '../form';

export const dummyForms: Array<Form> = [
  new Form('Dummy Form 1', 'SSS', {
    name: true,
    address: true,
    contact: true,
    foreignAddress: true,
  }),
  new Form('Dummy Form 2', 'SSS', {
    name: true,
    address: true,
    contact: true,
    foreignAddress: true,
  }),
  new Form('Dummy Form 1', 'PhilHealth', {
    name: true,
    address: true,
    contact: true,
    foreignAddress: true,
  }),
  new Form('Dummy Form 2', 'PhilHealth', {
    name: true,
    address: true,
    contact: true,
    foreignAddress: true,
  }),
];

export default {};
