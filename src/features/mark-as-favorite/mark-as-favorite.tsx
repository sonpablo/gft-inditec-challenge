import heartDefault from '../../assets/heart-default.svg?url';
import heartUnselected from '../../assets/heart-unselected.svg?url';
import { useFavorites } from '../../hooks';

import './mark-as-favorite.styles.css';
type Props = {
  characterId: number;
  size?: 'small' | 'large';
};
export const MarkAsFavorite = (props: Props) => {
  const { characterId, size = 'small' } = props;
  const { state, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = state.some((current) => current === characterId);

  const image = isFavorite ? heartDefault : heartUnselected;

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(characterId);
    } else {
      addFavorite(characterId);
    }
  };

  return (
    <button className={`mark-as-favorite ${size}`} onClick={handleClick}>
      <img src={image} alt="icon" />
    </button>
  );
};
