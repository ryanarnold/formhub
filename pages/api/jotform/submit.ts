import { NextApiRequest, NextApiResponse } from 'next';
import { submitJotforms } from '../../../common/jotforms';
import { Form } from '../../../data/form';
import { UserData } from '../../../data/user-data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userData: UserData = req.body.user_data;
    const selectedForms: Array<Form> = req.body.selected_forms;

    submitJotforms(userData, selectedForms).then((userForms) => {
      res.status(200).json({ user_forms: userForms });
    });
  }
}
