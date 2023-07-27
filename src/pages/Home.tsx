import { useQuery } from '@tanstack/react-query';
import Capsules from 'modules/spaceX/capsules';
import { ALL_CAPSULES } from 'types/endpoints';

const Home = () => {
  const { data, isLoading } = useQuery([ALL_CAPSULES], Capsules.all);

  console.log(data, isLoading);

  return <div>Home</div>;
};

export default Home;
