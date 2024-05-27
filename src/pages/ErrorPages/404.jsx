import { Redirect } from '../Redirect';
import { NotFoundContent, NotFoundDivider, NotFoundText, NotFoundTitle, NotFoundWrapper } from '../../modules/NotFound';

export const NotFound = () => {
  return (
    <Redirect to={'/'} waitFor={500000}>
      <NotFoundWrapper>
        <NotFoundContent>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundDivider />
          <NotFoundText>There's nothing here</NotFoundText>
        </NotFoundContent>
      </NotFoundWrapper>
    </Redirect>
  );
};
