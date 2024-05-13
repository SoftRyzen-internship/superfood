export interface Comment {
    key: number;
    nameAndSurname: string;
    comment: string;
}

export interface CardCommentsProps {
    data: {
      commentsList: Comment[];
      readMore: string;
    };
  }