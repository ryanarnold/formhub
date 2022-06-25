/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { Button } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <h1>Hello</h1>
    <Button variant="contained" href="/start/forms">
      Get Started
    </Button>
  </div>
);

export default Home;
