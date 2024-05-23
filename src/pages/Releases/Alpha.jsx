import { useState } from 'react';
import { Loader, Footer, ReleasesTable } from '@common';
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
