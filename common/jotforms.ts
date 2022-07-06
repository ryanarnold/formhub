import axios from 'axios';
import { Form } from '../data/form';
import { UserData } from '../data/user-data';
import { UserForm } from '../data/user-form';

const API_KEY = 'cc46b6111c12e32f0e8e0ff6cb37d465';

const headers = { 'Content-Type': 'multipart/form-data' };

/**
 * Returns a data object that JotForms can understand.
 *
 * Fields in jotforms are identified as indexes. (e.g., firstName has index 5).
 *
 * @param userData
 * @param form
 * @returns
 */
export function jotify(userData: UserData, form: Form): any {
  const data: any = {
    'submission[1]': form.jotformId,
  };

  form.mappings.forEach((m) => {
    const left = `submission[${m.index}]`;
    const right = (userData as any)[m.field];

    data[left] = right;
  });

  return data;
}

export async function submitJotforms(userData: UserData, forms: Array<Form>) {
  const userForms: Array<UserForm> = [];

  await Promise.all(
    forms.map(async (form) => {
      const formData = jotify(userData, form);

      let response;

      try {
        response = await axios.post(
          `https://api.jotform.com/form/${form.jotformId}/submissions?apiKey=${API_KEY}`,
          formData,
          { headers }
        );
      } catch (error) {
        console.error(error);
      }

      if (response?.status === 200) {
        userForms.push(new UserForm(response?.data.content.submissionID, form));
      }
    })
  );

  return userForms;
}

export function getDownloadLink(userForm: UserForm) {
  return `https://api.jotform.com/pdf-converter/${userForm.form.jotformId}/fill-pdf?download=1&submissionID=${userForm.submissionId}&apikey=${API_KEY}`;
}

export default {};
