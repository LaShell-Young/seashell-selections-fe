import { Box, Container, Typography } from '@mui/material';
import ActivitiesList from './ActivitiesList';

const ActivitiesPage = ({ activities }) => (
  <>
    <Box className="page-intro">
      <Container maxWidth="lg">
        <Typography className="section-kicker">Make a day of it</Typography>
        <Typography component="h1" variant="h1">The best plans start<br />with a little curiosity.</Typography>
      </Container>
    </Box>
    <ActivitiesList activities={activities} />
  </>
);

export default ActivitiesPage;
