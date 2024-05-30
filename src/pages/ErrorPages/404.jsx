import { Redirect } from '../Redirect';
import {
  NotFoundContent,
  NotFoundDivider,
  NotFoundSubtext,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
} from '../../modules/NotFound';
import { useEffect, useState } from 'react';

export const NotFound = () => {
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (redirectTimer <= 0) return;
      setRedirectTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
