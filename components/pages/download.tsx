import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import styled from '@emotion/styled';
import { UserForm } from '../../data/user-form';
import { getDownloadLink } from '../../common/jotforms';

const DownloadButton = styled(Button)`
  font-size: small;
`;

interface Props {
  userForms: Array<UserForm>;
}

function StartDownloadPage({ userForms }: Props) {
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
              {userForms.map((f) => (
                <TableRow key={f.form.name}>
                  <TableCell component="th" scope="row">
                    {`${f.form.name} (${f.form.category})`}
                  </TableCell>
                  <TableCell align="right">
                    <DownloadButton href={getDownloadLink(f)} size="small">
                      Download
                    </DownloadButton>
                  </TableCell>
                </TableRow>
              ))}
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
