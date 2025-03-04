import { useParams, useNavigate } from 'react-router';
import { Spinner } from '../../components';
import { Transformations } from './components/transformations/transformations';
import { Favorite } from './components/favorite/favorite';
import { useCharacter } from '../../hooks';
import './character-details.styles.css';

export const CharacterDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  if (!id) navigate('/');

  const { character, isLoading, isError, error } = useCharacter(id!);

  if (isLoading) return <Spinner />;

  if (isError || !character)
    return <p>{error?.message || 'Something went wrong'}</p>;

  const { name, image, description, transformations } = character;

  return (
    <section>
      <div className="character-container">
        <article className="character-resume">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <aside>
            <Favorite name={name} id={id!} />
            <p>{description}</p>
          </aside>
        </article>
      </div>

      <div className="transformations-container">
        <Transformations transformations={transformations} name={name} />
      </div>
    </section>
  );
};
