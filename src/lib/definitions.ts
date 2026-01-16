export type Camera = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  price: number;
  specs: {
    sensor: string;
    megapixels: string;
    iso: string;
    video: string;
    autofocus: string;
    connectivity: string;
  };
  bestFor: string[];
};

export type PlaceholderImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  gallery: {
    id: string;
    imageUrl: string;
    imageHint: string;
  }[];
};
