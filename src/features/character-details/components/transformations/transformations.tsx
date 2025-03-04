import { Transformation } from '../../../models/db-character-details';
import './transformations.styles.css';
type Props = {
  transformations: Transformation[];
  name: string;
};

export const Transformations = (props: Props) => {
  const { transformations, name } = props;

  const hastTransformations = transformations.length > 0;

  return (
    <div className="character-transformations">
      {hastTransformations ? (
        <>
          <h2>Transformations</h2>
          <div className="character-transformations-list" role="list">
            {transformations.map((current) => (
              <article key={current.id}>
                <figure role="listitem">
                  <img src={current.image} alt={current.name} />
                </figure>
                <footer>
                  <p className="transformation">{current.name}</p>
                  <p className="ki">{current.ki}</p>
                </footer>
              </article>
            ))}
          </div>
        </>
      ) : (
        <p>{`${name} hast not transformations`}</p>
      )}
    </div>
  );
};
