import { BlogLoader } from '@src/modules';
import { redirectTo } from '@utils/redirect';
import { useState } from 'react';
import { CommonPage } from '../Pages.styles';

interface RedirectProps {
  to: string;
  waitFor?: number;
  children?: React.ReactNode;
}

export const Redirect = ({ to, waitFor = 1000, children }: RedirectProps) => {
  const [showLoader, setShowLoader] = useState(false);
  const [setRedirect, setSetRedirect] = useState(false);

  const handleRedirect = () => {
    setTimeout(() => {
      if (!setRedirect) {
        redirectTo(to, false);
        setSetRedirect(true);
      }
    }, 1000);
  };

  setTimeout(() => {
    handleRedirect();
    setShowLoader(true);
  }, waitFor);

  return (
    <CommonPage>
      {children}
      {showLoader && <BlogLoader caption={'loader_text_redirect'} redirectUrl={to} isLoading />}
    </CommonPage>
  );
};

export default Redirect;
