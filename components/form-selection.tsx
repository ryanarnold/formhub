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
}

function FormSelection({ category, forms }: Props) {
  return (
    <Stack gap={0}>
      <Typography variant="body1" fontWeight="bold">
        {category}
      </Typography>
      <FormGroup>
        {forms.map((form) => (
          <FormControlLabel
            key={form.name}
            label={form.name}
            control={<Checkbox value={form.name} />}
          />
        ))}
      </FormGroup>
    </Stack>
  );
}

export default FormSelection;
