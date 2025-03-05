import { Transformation } from '../../../../models';
import './transformations.styles.css';

const parseKi = (ki: string): number => {
  const units: Record<string, number> = {
    Billion: 1e9,
    Trillion: 1e12,
    Quadrillion: 1e15,
    Quintillion: 1e18,
    Septillion: 1e24,
  };

  const match = ki.match(/([\d.,]+)\s*([a-zA-Z]*)/);
  if (!match) return parseFloat(ki.replace(/,/g, ''));

  const value: number = parseFloat(match[1].replace(/,/g, ''));
  const unit: string = match[2];

  return unit ? value * (units[unit] || 1) : value;
};

const sortTransformationsByKi = (
  transformations: Transformation[]
): Transformation[] => {
  return [...transformations].sort((a, b) => parseKi(a.ki) - parseKi(b.ki));
};

type Props = {
  transformations: Transformation[];
  name: string;
};

export const Transformations = ({ transformations, name }: Props) => {
  const hasTransformations = transformations.length > 0;

  const renderTransformations = () => {
    const sortedTransformations = sortTransformationsByKi(transformations);

    return (
      <>
        <h2>Transformations</h2>
        <div className="character-transformations-list" role="list">
          {sortedTransformations.map((current) => (
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
    );
  };

  return (
    <div className="character-transformations">
      {hasTransformations ? (
        renderTransformations()
      ) : (
        <p>{`${name} has no transformations`}</p>
      )}
    </div>
  );
};
