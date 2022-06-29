import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Form } from '../data/form';

interface Props {
  category: string;
  forms: Array<Form>;
  addFormCB: (form: Form) => void;
  removeFormCB: (form: Form) => void;
  selectedForms: Array<Form>;
}

function FormSelection({ category, forms, addFormCB, removeFormCB, selectedForms }: Props) {
  return (
    <Stack gap={0}>
      <Typography variant="body1" fontWeight="bold">
        {category}
      </Typography>
      <FormGroup>
        {forms.map((form) => {
          let isSelected = false;

          selectedForms.forEach((f) => {
            if (f.name === form.name && f.category === form.category) {
              isSelected = true;
            }
          });

          return (
            <FormControlLabel
              key={form.name}
              label={form.name}
              control={
                isSelected ? (
                  <Checkbox
                    value={form.name}
                    onChange={(event) => {
                      if (event.target.checked) addFormCB(form);
                      else removeFormCB(form);
                    }}
                    checked
                  />
                ) : (
                  <Checkbox
                    value={form.name}
                    onChange={(event) => {
                      if (event.target.checked) addFormCB(form);
                      else removeFormCB(form);
                    }}
                  />
                )
              }
            />
          );
        })}
      </FormGroup>
    </Stack>
  );
}

export default FormSelection;
