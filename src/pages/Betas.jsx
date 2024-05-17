import { useState } from 'react';
import { Loader } from '../common';
import { BetaWrapper, NoBackgroundPage } from './Pages.styles';
import { Footer } from '../components';
import { ReleasesTable } from '../components/ReleasesTable';
import betaReleases from '../utils/betaReleases.json';

export const Beta = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <NoBackgroundPage>
      <BetaWrapper>
        <Loader isLoading={isLoading} />
        <ReleasesTable
          title={'Beta Prototypes'}
          subtitle={'Recovered from history. Some may be lost in time.'}
          releases={betaReleases}
        />
        <Footer />
      </BetaWrapper>
    </NoBackgroundPage>
  );
};
