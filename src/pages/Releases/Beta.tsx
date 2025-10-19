import Footer from '@common/Footer';
import Loader from '@common/Loader';
import ReleasesTable from '@common/ReleasesTable';
import { useState } from 'react';
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

export default Beta;
