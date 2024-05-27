import { BlogLoader } from '~/modules';
import { redirectTo } from '@utils/redirect';
import { CommonPage } from '../Pages.styles';
import { useState } from 'react';

export const Redirect = ({ to, waitFor = 1000, children }) => {
  const [showLoader, setShowLoader] = useState(false);

  const handleRedirect = () => {
    setTimeout(() => {
      redirectTo(to);
    }, 1000);
  };

  setTimeout(() => {
    handleRedirect();
    setShowLoader(true);
  }, waitFor);

  return (
    <CommonPage>
      {children}
      {showLoader && <BlogLoader caption={'loader_text_redirect'} isLoading />}
    </CommonPage>
  );
};
