export type Character = {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
};

export type Meta = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type Links = {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
};

export type CharacterResponse = {
  items: Character[];
  meta: Meta;
  links: Links;
};
