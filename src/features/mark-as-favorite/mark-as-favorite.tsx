import heartDefault from '../../assets/heart-default.svg?url';
import heartUnselected from '../../assets/heart-unselected.svg?url';
import { useFavorites } from '../../hooks';

import './mark-as-favorite.styles.css';
type Props = {
  characterId: number;
};
export const MarkAsFavorite = (props: Props) => {
  const { characterId } = props;
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
    <button onClick={handleClick}>
      <img src={image} alt="icon" />
    </button>
  );
};
