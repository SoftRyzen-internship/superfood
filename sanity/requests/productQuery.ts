import { groq } from 'next-sanity';

export const productQuery = groq`*[_type=="product"]{_id,product,price, slug}`;