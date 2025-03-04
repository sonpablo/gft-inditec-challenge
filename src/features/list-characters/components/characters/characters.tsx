import { Character } from '../../../../models';
import { CharacterCard } from '../character/character';
import './characters.styles.css';

export const Characters = (props: { characters: Character[] }) => {
  const { characters } = props;

  return (
    <section aria-labelledby="character-list">
      <p className="results">{`Results ${characters.length}`}</p>
      <div className="character-cards">
        {characters.map((current) => {
          const { name, image, id } = current;
          return (
            <CharacterCard
              name={name}
              imageUrl={image}
              key={id}
              characterId={id}
            />
          );
        })}
      </div>
    </section>
  );
};
