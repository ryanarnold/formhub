import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function StartIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push('/start/forms');
  }, []);

  return <div />;
}

export default StartIndex;
