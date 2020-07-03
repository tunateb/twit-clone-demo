export type Tweet = {
  id?: number;

  text: string;
  likes?: number;
  retweets?: number;
  comments?: number;
  imageUrl?: string;
  imageAlt?: string;
};
