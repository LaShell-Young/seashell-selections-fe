import { useEffect, useMemo, useState } from 'react';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded, PlayArrowRounded } from '@mui/icons-material';
import { Box, Button, Chip, Container, IconButton, Typography } from '@mui/material';

const Hero = ({ entertainment }) => {
  const slides = useMemo(() => {
    const availableSlides = entertainment.flatMap((item) =>
      (item.backdrops ?? [])
        .filter(Boolean)
        .map((backdrop) => ({ backdrop, item })),
    );

    for (let index = availableSlides.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [availableSlides[index], availableSlides[randomIndex]] = [
        availableSlides[randomIndex],
        availableSlides[index],
      ];
    }

    const maxSlides = 5;
    if (availableSlides.length > maxSlides) {
      return availableSlides.slice(0, maxSlides);
    }

    return availableSlides;
  }, [entertainment]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const timer = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 7000);

    return () => clearTimeout(timer);
  }, [activeIndex, slides.length]);

  const activeSlide = slides[activeIndex];
  const featured = activeSlide?.item ?? entertainment[0];

  if (!featured) return null;

  return (
    <Box className="hero" data-testid="hero">
      <Box
        key={activeSlide?.backdrop ?? featured.poster}
        className="hero-backdrop"
        style={{ backgroundImage: `url("${activeSlide?.backdrop ?? featured.poster}")` }}
        aria-hidden="true"
      />
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
        </Box>
      </Container>
      {slides.length > 1 && (
        <Box className="hero-carousel-controls">
          <IconButton
            aria-label="Previous backdrop"
            className="hero-carousel-button"
            onClick={() => setActiveIndex((index) => (index - 1 + slides.length) % slides.length)}
          >
            <ArrowBackIosNewRounded fontSize="small" />
          </IconButton>
          <Typography className="hero-carousel-count" aria-live="polite">
            {activeIndex + 1} / {slides.length}
          </Typography>
          <IconButton
            aria-label="Next backdrop"
            className="hero-carousel-button"
            onClick={() => setActiveIndex((index) => (index + 1) % slides.length)}
          >
            <ArrowForwardIosRounded fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Typography className="hero-caption">A handpicked watchlist, made for sharing.</Typography>
    </Box>
  );
};

export default Hero;
