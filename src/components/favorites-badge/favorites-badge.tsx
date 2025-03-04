import { Link } from 'react-router';
import heartDefault from '../../assets/heart-default.svg?url';
import heartUnselected from '../../assets/heart-unselected.svg?url';
import { useFavorites } from '../../hooks';

export const FavoritesBadge = () => {
  const { state } = useFavorites();
  const favorites = state.length;
  const isDisabled = favorites === 0;

  return isDisabled ? (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        pointerEvents: 'none',
        opacity: 0.5,
      }}
      aria-disabled="true"
    >
      <img src={heartUnselected} alt="No favorites" width="24" height="24" />
      <span style={{ marginLeft: '8px', color: '#fff' }}>{favorites}</span>
    </span>
  ) : (
    <Link
      to={'/favorites'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <img src={heartDefault} alt="Favorite" width="24" height="24" />
      <span style={{ marginLeft: '8px', color: '#fff' }}>{favorites}</span>
    </Link>
  );
};
