import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

const Presence = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Presence</title>
    </Helmet>
    <h1>👀 Presence</h1>
    <p>
      I see who you are spying on me. :)
    </p>
  </PageWrapper>
);

export default Presence;
