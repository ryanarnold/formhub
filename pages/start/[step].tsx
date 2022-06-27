import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import StartFormsPage from '../../components/pages/forms';

function StartSteps() {
  const router = useRouter();

  const { step } = router.query;

  useEffect(() => {
    if (step !== 'forms') router.push('/start/forms');
  }, []);

  if (step === 'forms') {
    return <StartFormsPage />;
  }
}

export default StartSteps;
