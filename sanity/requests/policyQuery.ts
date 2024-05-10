import { groq } from 'next-sanity';

export const policyQuery = groq`*[_type=="policy"]{_id,title,text}`;