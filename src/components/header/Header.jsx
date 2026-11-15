import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'The watchlist', to: '/' },
  { label: 'Things to do', to: '/activities' },
];

const Header = () => (
  <AppBar className="site-header" position="sticky" elevation={0}>
    <Container maxWidth="lg">
      <Toolbar disableGutters className="header-toolbar">
        <NavLink className="brand-link" to="/" aria-label="SeaShell Selections home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <Typography component="span" className="brand-name">SeaShell Selections</Typography>
        </NavLink>
        <Box component="nav" className="header-nav" aria-label="Main navigation">
          {navItems.map(({ label, to }) => (
            <Button component={NavLink} end={to === '/'} key={to} to={to} className="nav-button">
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
