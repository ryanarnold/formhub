import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import StartDataPage from '../../components/pages/data';
import StartDownloadPage from '../../components/pages/download';
import StartFormsPage from '../../components/pages/forms';
import StartSummaryPage from '../../components/pages/summary';
import { Form } from '../../data/form';

function StartSteps() {
  const [selectedForms, setSelectedForms] = useState<Array<Form>>([]);

  const router = useRouter();

  const { step } = router.query;

  useEffect(() => {
    if (step === undefined) return;
    if (step !== 'forms' && step !== 'data' && step !== 'summary' && step !== 'download')
      router.push('/start/forms');
  }, [router.isReady]);

  const addToSelectedForms = (form: Form) => {
    setSelectedForms([...selectedForms, form]);
  };

  const removeFromSelectedForms = (form: Form) => {
    setSelectedForms(selectedForms.filter((f) => f.name !== form.name));
  };

  if (step === 'forms') {
    return <StartFormsPage addFormCB={addToSelectedForms} removeFormCB={removeFromSelectedForms} />;
  }
  if (step === 'data') {
    return <StartDataPage selectedForms={selectedForms} />;
  }
  if (step === 'summary') {
    return <StartSummaryPage />;
  }
  if (step === 'download') {
    return <StartDownloadPage />;
  }
}

export default StartSteps;
