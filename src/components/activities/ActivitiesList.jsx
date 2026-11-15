import ItemCollection from '../ItemCollection';

const categories = [
  'All', 'Active', 'Romantic', 'Free', 'Inexpensive', 'Drinking Will Occur',
  'Attraction', 'Travel', 'Educational', 'Nightlife', 'Hide From The World Together',
  'Costly', 'Kiss Ya Money Goodbye',
];

const ActivitiesList = ({ activities }) => (
  <ItemCollection
    id="activities"
    items={activities}
    options={categories}
    title="Out and about"
    description="Little adventures, date ideas, and places to make a day of it."
    emptyMessage="Pick another category and see where the day takes you."
  />
);

export default ActivitiesList;
