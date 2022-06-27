import React from 'react';

interface Props {
  formsToCreate: Array<String>;
}

function StartDataPage({ formsToCreate }: Props) {
  return (
    <div>
      StartDataPage{' '}
      {formsToCreate.map((f) => (
        <p>{f}</p>
      ))}
    </div>
  );
}

export default StartDataPage;
