export type Planet = {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: string | null;
};

export type Transformation = {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
};

export type CharacterDetails = {
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
  originPlanet: Planet;
  transformations: Transformation[];
};
