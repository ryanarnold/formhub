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
import PaperWithHeading from '../paper-with-heading';

function StartSummaryPage() {
  return (
    <Container maxWidth="sm">
      <Stack gap={3}>
        <PaperWithHeading heading="Summary">
          <Box>
            <Typography variant="body1">The following forms will be generated:</Typography>
            <FormGroup>
              <FormControlLabel label="E-1 Form (SSS)" control={<Checkbox defaultChecked />} />
              <FormControlLabel label="E-4 Form (SSS)" control={<Checkbox defaultChecked />} />
              <FormControlLabel
                label="Member Registration Form (PhilHealth)"
                control={<Checkbox defaultChecked />}
              />
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
            <Button variant="contained" href="/start/download" fullWidth>
              Generate Forms
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default StartSummaryPage;
