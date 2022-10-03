import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import NebuleiIcon from '../assets/images/Gradient-Nebulei-Logo.png';
import PulsarIcon from '../assets/images/Gradient-Pulsar-Logo.png';
import QuasarlabIcon from '../assets/images/Gradient-Quasarlab-Logo.png';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url=""
          name="Nebulei"
          iconReference={NebuleiIcon}
          tagline="Consumer social"
          role={'Founder & Engineer'}
          what={'I founded Nebulei to inspire further aspirations in all feilds and want social interaction among great minds to comfortably share and collaborate.'}
          acquired
        />
        <Co
          url=""
          name="Pulsar-Stellar"
          iconReference={PulsarIcon}
          tagline="AI & Robotics"
          role={'Founder & Engineer'}
          what={'I founded Pulsar-Stellar an AI & Robotics company to eventually get to the point to use robotics to advance civilization on all aspects.'}
        />
        <Co
          url=""
          name="Quasar-Labs"
          iconReference={QuasarlabIcon}
          tagline="Software Development"
          role={'Software Engineer'}
          what={'I do software/web development and create amazing applications for clientele.'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'nebulei'}
        url={'https://github.com/nebulei/nebulei'}
        primaryLanguage={'Python'}
        description="Backend API for social network."
      />
      <Repo
        name={'pulsar-stellar'}
        url={'https://github.com/pulsar-stellar/pulsar-stellar'}
        primaryLanguage={'C++'}
        description="Robotics library to build any type of robots you can imagine."
      />
      <Repo
        name={'guardian'}
        url={'https://github.com/ueberauth/guardian'}
        primaryLanguage={'Elixir'}
        description="An authentication library for use with Elixir applications."
      />
      <Repo
        name={'physicslab.space'}
        url={'https://github.com/exploreIO/physicslab.space'}
        primaryLanguage={'TypeScript'}
        description="This very website."
      />
      <Repo
        name={'luajit'}
        url={'https://github.com/LuaJIT/LuaJIT'}
        primaryLanguage={'Lua'}
        description="LuaJIT is a Just-In-Time (JIT) compiler for the Lua programming language."
      />
            <Repo
        name={'json-iterator'}
        url={'https://github.com/json-iterator/go'}
        primaryLanguage={'GO'}
        description="A high-performance 100% compatible drop-in replacement of 'encoding/json'"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
