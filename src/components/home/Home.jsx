import EntertainmentList from '../entertainment/EntertainmentList';
import Hero from '../hero/Hero';

const Home = ({ entertainment }) => (
  <>
    <Hero entertainment={entertainment} />
    <EntertainmentList entertainment={entertainment} />
  </>
);

export default Home;
