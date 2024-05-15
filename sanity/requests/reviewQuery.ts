import { groq } from 'next-sanity';

export const reviewQuery = groq`*[_type=="review"]{_id,reviewer,comment}`;