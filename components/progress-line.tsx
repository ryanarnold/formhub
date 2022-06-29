import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BuildIcon from '@mui/icons-material/Build';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material';

const Divided = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  flex-grow: 1;
  border-bottom: 1px solid #f72585;
`;

const DividerDisabled = styled.span`
  flex-grow: 1;
  border-bottom: 1px solid #dddddd;
`;

interface Props {
  stage: number;
}

function ProgressLine({ stage }: Props) {
  const primaryColor = useTheme().palette.primary.main;
  return (
    <Divided>
      <Avatar sx={{ bgcolor: primaryColor, width: 50, height: 50 }}>
        <AssignmentIcon />
      </Avatar>
      {stage < 2 ? <DividerDisabled /> : <Divider />}

      <Avatar sx={{ bgcolor: stage < 2 ? '#dddddd' : primaryColor, width: 50, height: 50 }}>
        <PersonOutlineIcon />
      </Avatar>
      {stage < 3 ? <DividerDisabled /> : <Divider />}
      <Avatar sx={{ bgcolor: stage < 3 ? '#dddddd' : primaryColor, width: 50, height: 50 }}>
        <BuildIcon />
      </Avatar>
    </Divided>
  );
}

export default ProgressLine;
