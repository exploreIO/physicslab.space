import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2004-03-17T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Mr. Blanc | {' '}
        <Tooltip arrow title={'17th March 2004'}>
          {age}
        </Tooltip>{' '}
        y/o Engineer, Innovator and Inventor.
      </p>
      <p>
        I love Engineering & Physics. I spend most of my time building Robots and ML algorithms while research in the feilds of Physics. Currently, I'm a Founder 
        and Engineer at{' '}
        <a href="/" target="norel noopen">
          Nebulei
        </a>
        <span> & </span>
        <a href="/" target="norel noopen">
           Pulsar-Stellar
        </a>
        .
      </p>
      <p>
        I specialize in Robotics & ML but eventually want to become an expert in physics, although far from there.
      </p>

      <p>
        In my free time, I dont really do anything else off the internet but some of my hobbies besides work itself, is reading and 
        chess basically. My end goal is too do space exploration.
      </p>

    </PageWrapper>
  );
};

export default Home;
