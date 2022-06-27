import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React from 'react';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function StartFormsPage() {
  return (
    <Container maxWidth="md">
      <Paper variant="outlined">
        <Box padding={2}>
          <Typography variant="h6">Choose Forms</Typography>
        </Box>

        <Divider />
        <Box padding={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" fontWeight="bold">
                SSS
              </Typography>
              <FormGroup>
                <FormControlLabel label="E-1 Form" control={<Checkbox />} />
                <FormControlLabel label="E-4 Form" control={<Checkbox />} />
              </FormGroup>
              <Typography variant="body1" fontWeight="bold" marginTop={2}>
                PhilHealth
              </Typography>
              <FormGroup>
                <FormControlLabel label="Member Registration Form" control={<Checkbox />} />
              </FormGroup>
              <Typography variant="body1" fontWeight="bold" marginTop={2}>
                Pag-Ibig
              </Typography>
              <FormGroup>
                <FormControlLabel label="Member's Data Form" control={<Checkbox />} />
              </FormGroup>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" fontWeight="bold">
                BIR
              </Typography>
              <FormGroup>
                <FormControlLabel label="Form 0605" control={<Checkbox />} />
                <FormControlLabel label="Form 1901" control={<Checkbox />} />
                <FormControlLabel label="Form 1905" control={<Checkbox />} />
                <FormControlLabel label="Form 1701" control={<Checkbox />} />
                <FormControlLabel label="Form 2551M" control={<Checkbox />} />
              </FormGroup>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" fontWeight="bold">
                BIR
              </Typography>
              <FormGroup>
                <FormControlLabel label="Form 0605" control={<Checkbox />} />
                <FormControlLabel label="Form 1901" control={<Checkbox />} />
                <FormControlLabel label="Form 1905" control={<Checkbox />} />
                <FormControlLabel label="Form 1701" control={<Checkbox />} />
                <FormControlLabel label="Form 2551M" control={<Checkbox />} />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box marginTop={2}>
        <Button variant="contained" href="/start/data" fullWidth>
          Choose these forms
        </Button>
      </Box>
    </Container>
  );
}

export default StartFormsPage;
