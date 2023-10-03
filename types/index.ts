export type User = {
    image: string
    id: string
    username: string
    name?: string; //string can be undefined
  }
 export type TweetType ={
    id: string;
    content: string;
    user: User;
    createdAt: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
  }