import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
      Thanks for visiting. I hope you enjoyed your stay. The source code for this website is
      available at <a href={'https://github.com/exploreIO/physicslab.space'}>exploreIO/physicslab.space</a>
    </p>
    <p>
      If you would like to network, you can email{' '}
      <a href="mailto:lalo@physicslab.space">lalo@physicslab.space</a>.
    </p>
  </PageWrapper>
);

export default Etc;
