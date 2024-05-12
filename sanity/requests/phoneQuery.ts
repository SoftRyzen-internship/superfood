import { groq } from 'next-sanity';

export const phonesQuery = groq`*[_type=="phone"]{_id,phoneUA, phoneLT}`;