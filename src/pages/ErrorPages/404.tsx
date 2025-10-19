import { useEffect, useState } from 'react';
import { NotFoundContent, NotFoundDivider, NotFoundSubtext, NotFoundText, NotFoundTitle, NotFoundWrapper } from '../../modules/NotFound';
import { Redirect } from '../Redirect/Redirect';

export const NotFound = () => {
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (redirectTimer <= 0) return;
      setRedirectTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectTimer]);

  return (
    <Redirect to={'/'} waitFor={5000}>
      <NotFoundWrapper>
        <NotFoundContent>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundDivider />
          <NotFoundText>There's nothing here</NotFoundText>
          {redirectTimer > 0 && <NotFoundSubtext>Redirecting in {redirectTimer}...</NotFoundSubtext>}
        </NotFoundContent>
      </NotFoundWrapper>
    </Redirect>
  );
};

export default NotFound;
