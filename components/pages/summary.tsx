import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import PaperWithHeading from '../paper-with-heading';
import { Form } from '../../data/form';

interface Props {
  selectedForms: Array<Form>;
}

function StartSummaryPage({ selectedForms }: Props) {
  return (
    <Container maxWidth="sm">
      <Stack gap={3}>
        <PaperWithHeading heading="Summary">
          <Box>
            <Typography variant="body1">The following forms will be generated:</Typography>
            <FormGroup>
              {selectedForms.map((f) => (
                <FormControlLabel
                  key={f.name}
                  label={`${f.name} (${f.category})`}
                  control={<Checkbox defaultChecked />}
                />
              ))}
            </FormGroup>
          </Box>
        </PaperWithHeading>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth>
              Edit information
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link href="/start/download">
              <Button variant="contained" fullWidth>
                Generate Forms
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default StartSummaryPage;
