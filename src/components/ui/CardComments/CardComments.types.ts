export interface Review {
  _id: string;
  reviewer: string;
  comment: string;
}

export interface CardCommentsProps {
  data: {
    commentsList: Review[];
  };
}
