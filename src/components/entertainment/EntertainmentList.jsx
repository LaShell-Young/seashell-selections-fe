import ItemCollection from '../ItemCollection';

const genres = [
  'All', 'Action', 'Comedy', 'Crime', 'Suspense', 'Sci-fi', 'History', 'Romance',
  'Gay', 'Thriller', 'Drama', 'Western', 'Adventure', 'Fantasy', 'Mystery',
  'Animation', 'Period piece', 'Spanish', 'Horror',
];

const EntertainmentList = ({ entertainment }) => (
  <ItemCollection
    id="watchlist"
    items={entertainment}
    options={genres}
    title="The watchlist"
    description="A growing collection of films and series worth making time for."
    emptyMessage="Try another category to find your next watch."
  />
);

export default EntertainmentList;
