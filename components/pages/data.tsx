import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Stack } from '@mui/material';
import PaperWithHeading from '../paper-with-heading';
import { Form, IFields } from '../../data/form';

interface Props {
  selectedForms: Array<Form>;
}

function StartDataPage({ selectedForms }: Props) {
  const fieldsToShow: IFields = {
    name: false,
    address: false,
    contact: false,
    foreignAddress: false,
  };

  console.log(selectedForms);

  selectedForms.forEach((f) => {
    if (f.fields.name) fieldsToShow.name = true;
    if (f.fields.address) fieldsToShow.address = true;
    if (f.fields.contact) fieldsToShow.contact = true;
    if (f.fields.foreignAddress) fieldsToShow.foreignAddress = true;
  });

  return (
    <Container maxWidth="sm">
      <Stack gap={3} marginBottom={5}>
        {fieldsToShow.name ? (
          <PaperWithHeading heading="Name">
            <Stack gap={2}>
              <TextField label="First Name" variant="outlined" size="small" fullWidth />
              <TextField label="Middle Name" variant="outlined" size="small" fullWidth />
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <TextField label="Last Name" variant="outlined" size="small" fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Suffix" variant="outlined" size="small" fullWidth />
                </Grid>
              </Grid>
            </Stack>
          </PaperWithHeading>
        ) : null}

        {fieldsToShow.contact ? (
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
              <Grid item xs={12}>
                <TextField label="Email Address" variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </PaperWithHeading>
        ) : null}

        {fieldsToShow.address ? (
          <PaperWithHeading heading="Address">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Room/Floor/Unit No./Building Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="House/Lot &amp; Blk No."
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Street Name" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Subdivision" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Barangay/District/Locality"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="City/Municipality" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={9}>
                <TextField label="Province" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <TextField label="ZIP Code" variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </PaperWithHeading>
        ) : null}

        {fieldsToShow.foreignAddress ? (
          <PaperWithHeading heading="Foreign Address">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Foreign Address" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={9}>
                <TextField label="Country" variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <TextField label="ZIP Code" variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </PaperWithHeading>
        ) : null}

        <Button variant="contained" href="/start/summary" fullWidth>
          Submit
        </Button>
      </Stack>
    </Container>
  );
}

export default StartDataPage;
