export interface FullData {
    results: Game[]
}
export interface GameDetails {
    id: number;
    name: string;
    description: string;
    metacritic: number;
    background_image: string;
}
export interface Game  {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null | unknown;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null | unknown;
  tags: Tag[];
};

type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: null | unknown;
    year_end: null | number;
    year_start: number | null;
    games_count: number;
    image_background: string;
  };
  released_at: string;
  requirements_en: null | unknown;
  requirements_ru: null | unknown;
};

type ParentPlatform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type Store = {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export interface ProductCardProps {
  id: number;
  background_image: string;
  name: string;
  metacritic: number;
  rating : number;
  genres : Genre[];
  platforms: Platform[];
}
export interface FilterInterface {
  games: Game[],
  page: number,
  filter: string
}