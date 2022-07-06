import { Form } from './form';

export class UserForm {
  submissionId: string;

  form: Form;

  constructor(submissionId: string, form: Form) {
    this.submissionId = submissionId;
    this.form = form;
  }
}

export default {};
