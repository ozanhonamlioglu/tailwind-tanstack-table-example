import { useQuery } from '@tanstack/react-query';
import NavBar from 'components/NavBar';
import Page from 'components/Page';
import Capsules from 'modules/spaceX/capsules';
import { ALL_CAPSULES } from 'types/endpoints';

const Home = () => {
  useQuery([ALL_CAPSULES], Capsules.all);

  return (
    <Page>
      <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Page>
  );
};

export default Home;
