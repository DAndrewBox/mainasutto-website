import { BlogLoader } from '~/modules';
import { redirectTo } from '@utils/redirect';
import { CommonPage } from '../Pages.styles';

export const Redirect = ({ to }) => {
  setTimeout(() => {
    redirectTo(to);
  }, 1000);

  return (
    <CommonPage>
      <BlogLoader caption={'loader_text_redirect'} isLoading />;
    </CommonPage>
  );
};
