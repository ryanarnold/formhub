import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Stack } from '@mui/material';
import Link from 'next/link';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';
import PaperWithHeading from '../paper-with-heading';
import { Form, IFields } from '../../data/form';
import ProgressLine from '../progress-line';
import { UserData } from '../../data/user-data';

interface Props {
  selectedForms: Array<Form>;
  updateUserDataCB: (data: UserData) => void;
}

function StartDataPage({ selectedForms, updateUserDataCB }: Props) {
  const router = useRouter();

  const fieldsToShow: IFields = {
    name: false,
    motherName: false,
    spouseName: false,
    birth: false,
    sex: false,
    civilStatus: false,
    citizenship: false,
    address: false,
    mailingAddress: false,
    contact: false,
    foreignAddress: false,
    philHealthMemberType: false,
    monthlyIncome: false,
    proofOfIncome: false,
  };

  selectedForms.forEach((f) => {
    if (f.fields.name) fieldsToShow.name = true;
    if (f.fields.address) fieldsToShow.address = true;
    if (f.fields.contact) fieldsToShow.contact = true;
  });

  const updateData = (event: React.MouseEvent) => {
    const userData = new UserData();
    const fields = Object.getOwnPropertyNames(userData);

    fields.forEach((field) => {
      const value = (document.getElementById(field) as HTMLInputElement)?.value;

      if (value) {
        (userData as any)[field] = value;
      }
    });

    updateUserDataCB(userData);
    router.push('/start/summary');
  };

  return (
    <Container maxWidth="sm">
      <Box marginTop={3} marginBottom={3}>
        <ProgressLine stage={2} />
      </Box>
      <Stack gap={3} marginBottom={5}>
        {fieldsToShow.name ? (
          <PaperWithHeading heading="Name">
            <Stack gap={2}>
              <TextField
                label="First Name"
                id="firstName"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Middle Name"
                id="middleName"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <TextField
                    label="Last Name"
                    id="lastName"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Suffix" id="suffix" variant="outlined" size="small" fullWidth />
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
                  id="mobileNumber"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">(+63)</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Telephone Number"
                  id="telephoneNumber"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  id="emailAddress"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
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
                  id="addressRoom"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="House/Lot &amp; Blk No."
                  id="addressHouse"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Street Name"
                  id="addressStreetName"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Subdivision"
                  id="addressSubdivision"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Barangay/District/Locality"
                  id="addressBarangay"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City/Municipality"
                  id="addressCity"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Province"
                  id="addressProvince"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="ZIP Code"
                  id="addressZipCode"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
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

        <Button variant="contained" onClick={updateData} fullWidth>
          Submit
        </Button>
      </Stack>
    </Container>
  );
}

export default StartDataPage;
