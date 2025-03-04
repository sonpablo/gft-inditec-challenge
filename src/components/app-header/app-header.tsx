import { Link } from 'react-router';
import { FavoritesBadge } from '../favorites-badge/favorites-badge';
import dragonBallLogo from '../../assets/dragon-ball.avif';
import './app-header.styles.css';

export const AppHeader = () => {
  return (
    <header role="banner" className="app-header">
      <Link to={'/'}>
        <img
          src={dragonBallLogo}
          alt="Dragon Ball logo"
          style={{ width: '100px', height: '60px' }}
          aria-hidden="true"
        />
      </Link>
      <FavoritesBadge />
    </header>
  );
};
