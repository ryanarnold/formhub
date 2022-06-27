import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  children: ReactJSXElement;
  heading: string;
  caption?: string;
}

function PaperWithHeading({ children, heading, caption }: Props) {
  return (
    <Paper variant="outlined">
      <Box padding={3}>
        <Typography variant="h6" fontWeight="bold">
          {heading}
        </Typography>
        {caption ? (
          <Typography variant="subtitle2" fontWeight="lighter">
            {caption}
          </Typography>
        ) : null}
        <Box marginBottom={3} />
        {children}
      </Box>
    </Paper>
  );
}

PaperWithHeading.defaultProps = {
  caption: '',
};

export default PaperWithHeading;
