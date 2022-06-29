import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Link from 'next/link';
import PaperWithHeading from '../paper-with-heading';
import { dummyForms } from '../../data/dummy/dummy-data';
import FormSelection from '../form-selection';
import { Form } from '../../data/form';

interface Props {
  addFormCB: (form: Form) => void;
  removeFormCB: (form: Form) => void;
}

function StartFormsPage({ addFormCB, removeFormCB }: Props) {
  const formCategories = Array.from(new Set(dummyForms.map((f) => f.category)));

  return (
    <Container maxWidth="sm">
      <PaperWithHeading heading="Choose Forms" caption="Choose the forms you wish to fill out">
        <Stack gap={2}>
          {formCategories.map((category) => {
            const filteredForms = dummyForms.filter((f) => f.category === category);
            return (
              <FormSelection
                key={category}
                category={category}
                forms={filteredForms}
                addFormCB={addFormCB}
                removeFormCB={removeFormCB}
              />
            );
          })}
        </Stack>
      </PaperWithHeading>

      <Box marginTop={2}>
        <Link href="/start/data">
          <Button variant="contained" fullWidth>
            Fill out these forms
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default StartFormsPage;
