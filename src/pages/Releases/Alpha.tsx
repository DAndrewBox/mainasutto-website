import Footer from '@common/Footer';
import Loader from '@common/Loader';
import ReleasesTable from '@common/ReleasesTable';
import { useState } from 'react';
import { NoBackgroundPage } from '../Pages.styles';
import alphaReleases from './alphaReleases.json';
import { AlphaWrapper } from './Releases.styles';

export const Alpha = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <NoBackgroundPage>
      <AlphaWrapper>
        <Loader isLoading={isLoading} />
        <ReleasesTable title={'Alpha Prototypes'} subtitle={'Recovered from history. Some may be lost in time.'} releases={alphaReleases} />
        <Footer />
      </AlphaWrapper>
    </NoBackgroundPage>
  );
};

export default Alpha;
