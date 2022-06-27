import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
import PaperWithHeading from '../paper-with-heading';

interface Props {
  formsToCreate: Array<String>;
}

function StartDataPage({ formsToCreate }: Props) {
  return (
    <Container maxWidth="md">
      <PaperWithHeading heading="Personal Data">
        <div>
          <h1>Hello</h1>
        </div>
      </PaperWithHeading>
    </Container>
  );
}

export default StartDataPage;
