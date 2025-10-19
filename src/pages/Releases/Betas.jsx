import { useState } from 'react';
import { Loader, Footer, ReleasesTable } from '@common';
import { NoBackgroundPage } from '../Pages.styles';
import betaReleases from './betaReleases.json';
import { BetaWrapper } from './Releases.styles';

export const Beta = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <NoBackgroundPage>
      <BetaWrapper>
        <Loader isLoading={isLoading} />
        <ReleasesTable title={'Beta Prototypes'} subtitle={'Recovered from history. Some may be lost in time.'} releases={betaReleases} />
        <Footer />
      </BetaWrapper>
    </NoBackgroundPage>
  );
};
