import { useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

const ItemCollection = ({ items, options, title, description, id, emptyMessage }) => {
  const [genre, setGenre] = useState('All');
  const visibleItems = useMemo(() => (
    genre === 'All'
      ? items
      : items.filter((item) => item.genres?.includes(genre.toLowerCase()))
  ), [genre, items]);

  return (
    <Container maxWidth="lg" className="collection-section" id={id}>
      <Box className="collection-heading">
        <Box>
          <Typography className="section-kicker">The good stuff</Typography>
          <Typography component="h2" variant="h2" className="section-title">{title}</Typography>
          <Typography className="section-description">{description}</Typography>
        </Box>
        <Box>
          <Box className="collection-count">
            Showing {visibleItems.length} {visibleItems.length === 1 ? 'selection' : 'selections'}
          </Box>
        </Box>
        <FormControl className="genre-select" size="small">
          <Select
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            inputProps={{ 'aria-label': `Filter ${title} by category` }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option === 'All' ? 'All categories' : option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {visibleItems.length ? (
        <Box className="collection-grid">
          {visibleItems.map((item, index) => (
            <Card className="selection-card" key={`${item.title}-${index}`} elevation={0}>
              <CardActionArea
                component="a"
                href={item.trailerLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Learn more about ${item.title}`}
              >
                <Box className="card-image-wrap">
                  <CardMedia
                    component="img"
                    className="card-image"
                    image={item.poster}
                    alt={`${item.title} cover`}
                    loading="lazy"
                  />
                  <span className="card-open" aria-hidden="true">↗</span>
                </Box>
                <CardContent className="selection-card-content">
                  <Stack direction="row" spacing={0.75} className="card-tags">
                    {item.genres?.slice(0, 2).map((tag) => (
                      <Chip key={tag} size="small" label={tag} />
                    ))}
                  </Stack>
                  <Typography component="h3" className="card-title">{item.title}</Typography>
                  <Typography className="card-subtitle">
                    {item.type === 'movie' || item.type === 'series'
                      ? item.type
                      : item.type || 'A little something to do'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
        <Box className="empty-state">
          <Typography component="h3" variant="h4">Nothing on this list just yet.</Typography>
          <Typography>{emptyMessage}</Typography>
        </Box>
      )}
      <Typography className="collection-count">
        Showing {visibleItems.length} {visibleItems.length === 1 ? 'selection' : 'selections'}
      </Typography>
    </Container>
  );
};

export default ItemCollection;
