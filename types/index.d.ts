export interface Result {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface Character {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      Comics;
  series:      Comics;
  stories:     Stories;
  events:      Comics;
  urls:        URL[];
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Ad = "ad",
  Backcovers = "backcovers",
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
  Pinup = "pinup",
  TextArticle = "text article",
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url:  string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}
