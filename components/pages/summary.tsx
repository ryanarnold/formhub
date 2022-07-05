import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import PaperWithHeading from '../paper-with-heading';
import { Form } from '../../data/form';
import ProgressLine from '../progress-line';
import { UserData } from '../../data/user-data';
import { submitJotforms } from '../../common/jotforms';

interface Props {
  selectedForms: Array<Form>;
  userData: UserData;
}

function StartSummaryPage({ selectedForms, userData }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const generateForms = async () => {
    setIsLoading(true);
    submitJotforms(userData, selectedForms).then(() => {
      router.push('/start/download');
      setIsLoading(false);
    });
  };

  return (
    <Container maxWidth="sm">
      <Box marginTop={3} marginBottom={3}>
        <ProgressLine stage={3} />
      </Box>
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
            {isLoading ? (
              <LoadingButton
                variant="contained"
                onClick={generateForms}
                loadingIndicator="Please wait..."
                loading
                fullWidth
              >
                Generate Forms
              </LoadingButton>
            ) : (
              <LoadingButton variant="contained" onClick={generateForms} fullWidth>
                Generate Forms
              </LoadingButton>
            )}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default StartSummaryPage;
