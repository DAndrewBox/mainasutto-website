import { useState } from 'react';
import { Loader } from '../common';
import { AlphaWrapper, NoBackgroundPage } from './Pages.styles';
import { Footer } from '../components';
import { ReleasesTable } from '../components/ReleasesTable';
import alphaReleases from '../utils/alphaReleases.json';

export const Alpha = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <NoBackgroundPage>
      <AlphaWrapper>
        <Loader isLoading={isLoading} />
        <ReleasesTable
          title={'Alpha Prototypes'}
          subtitle={'Recovered from history. Some may be lost in time.'}
          releases={alphaReleases}
        />
        <Footer />
      </AlphaWrapper>
    </NoBackgroundPage>
  );
};
