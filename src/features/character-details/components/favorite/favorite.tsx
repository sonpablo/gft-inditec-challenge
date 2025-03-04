import { MarkAsFavorite } from '../../../mark-as-favorite/mark-as-favorite';
import './favorite.style.css';

type Props = {
  name: string;
  id: string;
};

export const Favorite = (props: Props) => {
  const { name, id } = props;
  return (
    <div className="favorite-container">
      <h1>{name}</h1>
      <MarkAsFavorite characterId={Number(id)} size={'large'} />
    </div>
  );
};
