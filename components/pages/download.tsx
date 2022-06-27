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
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import styled from '@emotion/styled';
import PaperWithHeading from '../paper-with-heading';

const DownloadButton = styled(Button)`
  font-size: small;
`;

interface Props {}

function StartDownloadPage({}: Props) {
  return (
    <Container maxWidth="sm">
      <Stack gap={3} marginTop={4}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Done!
          </Typography>
          <Typography variant="body1">Your forms are done being filled out</Typography>
        </Box>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Form Name</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="E1">
                <TableCell component="th" scope="row">
                  Form E-1 (SSS)
                </TableCell>
                <TableCell align="right">
                  <DownloadButton size="small">Download</DownloadButton>
                </TableCell>
              </TableRow>
              <TableRow key="E4">
                <TableCell component="th" scope="row">
                  Form E-4 (SSS)
                </TableCell>
                <TableCell align="right">
                  <DownloadButton size="small">Download</DownloadButton>
                </TableCell>
              </TableRow>
              <TableRow key="E4">
                <TableCell component="th" scope="row">
                  Member Registration Form (PhilHealth)
                </TableCell>
                <TableCell align="right">
                  <DownloadButton size="small">Download</DownloadButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Stack gap={2}>
          <Button variant="contained" href="/start/download" fullWidth>
            Download All
          </Button>
          <Button variant="outlined" href="/" fullWidth>
            Back to homepage
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default StartDownloadPage;
