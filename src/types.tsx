export interface MovieAPIProps {
  tmsId: string;
  rootId: string;
  subType: string;
  title: string;
  releaseYear: number;
  releaseDate: string;
  titleLang: string;
  descriptionLang: string;
  entityType: string;
  genres?: string[];
  longDescription: string;
  shortDescription: string;
  topCast: string[];
  directors: string[];
  officialUrl?: string;
  qualityRating?: QualityRating;
  ratings?: Rating[];
  advisories?: string[];
  runTime: string;
  preferredImage: PreferredImage;
  showtimes: ShowtimesProps[];
}

interface QualityRating {
  ratingsBody: string;
  value: string;
}

interface Rating {
  code: string;
}

interface PreferredImage {
  width?: string;
  height?: string;
  uri: string;
  category?: string;
  text?: string;
  primary?: string;
}

export interface TheaterProps
  extends Omit<
    MovieAPIProps,
    | "subType"
    | "releaseDate"
    | "descriptionLang"
    | "entityType"
    | "longDescription"
    | "qualityRating"
    | "advisories"
    | "preferredImage"
  > {
  tmsId: string;
  rootId: string;
  title: string;
  releaseYear: number;
  titleLang: string;
  genres?: string[];
  shortDescription: string;
  topCast: string[];
  directors: string[];
  officialUrl?: string;
  ratings?: Rating[];
  runTime: string;
  showtimes: ShowtimesProps[];
}

export interface ShowtimeTheaterProps {
  id: string;
  name: string;
}

export interface ShowtimesProps {
  theatre: ShowtimeTheaterProps;
  dateTime: string;
  quals?: string;
  ticketURI?: string;
}

export interface MovieProps
  extends Omit<
    TheaterProps,
    | "rootId"
    | "titleLang"
    | "language"
    | "shortDescription"
    | "topCast"
    | "directors"
  > {
  tmsId: string;
  title: string;
  genres?: string[];
  ratings?: Rating[];
  runTime: string;
  showtimes: ShowtimesProps[];
  releaseYear: number;
  officialUrl?: string;
}
