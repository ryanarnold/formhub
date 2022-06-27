import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Stack } from '@mui/material';
import PaperWithHeading from '../paper-with-heading';

interface Props {
  formsToCreate: Array<String>;
}

function StartDataPage({ formsToCreate }: Props) {
  return (
    <Container maxWidth="md">
      <Stack gap={3}>
        <PaperWithHeading heading="Personal Information">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="First Name" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Middle Name" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Last Name" variant="outlined" size="small" fullWidth />
            </Grid>
          </Grid>
        </PaperWithHeading>
        <PaperWithHeading heading="Contact Information">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Mobile Number"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">(+63)</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Telephone Number" variant="outlined" size="small" fullWidth />
            </Grid>
          </Grid>
        </PaperWithHeading>
        <Button variant="contained" href="/start/data" fullWidth>
          Submit
        </Button>
      </Stack>
    </Container>
  );
}

export default StartDataPage;
