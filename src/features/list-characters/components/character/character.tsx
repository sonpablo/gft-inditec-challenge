import { Link } from 'react-router';
import { MarkAsFavorite } from '../../../mark-as-favorite/mark-as-favorite';
import './character.style.css';
type Props = {
  name: string;
  imageUrl: string;
  characterId: number;
};
export const CharacterCard = (props: Props) => {
  const { name, imageUrl, characterId } = props;

  const linkTo = `/character/${characterId}`;

  return (
    <article className="character-card">
      <Link to={linkTo} className="character-card">
        <figure>
          <img src={imageUrl} alt={name} />
        </figure>
      </Link>
      <footer>
        <p>{name}</p>
        <MarkAsFavorite characterId={characterId} />
      </footer>
    </article>
  );
};
