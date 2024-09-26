export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Image[];
  reviews: Review[];
}

export interface Image {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type GetAllTrucksResponse = {
  total: number;
  items: Camper[];
};

export type FeaturesData = {
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  transmission: string;
  engine: string;
  radio: boolean;
};

export type FeatureImages = {
  [key: string]: string;
};
