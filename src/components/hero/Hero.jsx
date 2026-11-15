import { ArrowDownwardRounded, PlayArrowRounded } from '@mui/icons-material';
import { Box, Button, Chip, Container, Typography } from '@mui/material';

const Hero = ({ entertainment }) => {
  const featured = entertainment.find((item) => item.backdrops?.[0]) ?? entertainment[0];

  if (!featured) return null;

  return (
    <Box
      className="hero"
      style={{ '--hero-image': `url("${featured.backdrops?.[0] || featured.poster}")` }}
    >
      <Container maxWidth="lg" className="hero-content">
        <Chip className="eyebrow hero-eyebrow" label="A little inspiration for your next night in" />
        <Typography className="hero-kicker">Your next favorite</Typography>
        <Typography component="h1" variant="h1" className="hero-title">
          Good stories<br />bring us together.
        </Typography>
        <Typography className="hero-copy">
          A thoughtfully collected list of films and series for your next cozy night in.
        </Typography>
        <Box className="hero-actions">
          <Button
            component="a"
            href={featured.trailerLink}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="secondary"
            startIcon={<PlayArrowRounded />}
          >
            Discover {featured.title}
          </Button>
          {/* <Button onClick={() => document.getElementById('watchlist')?.scrollIntoView()} className="hero-scroll" endIcon={<ArrowDownwardRounded />}>
            Explore the collection
          </Button> */}
        </Box>
      </Container>
      <Typography className="hero-caption">A handpicked watchlist, made for sharing.</Typography>
    </Box>
  );
};

export default Hero;
