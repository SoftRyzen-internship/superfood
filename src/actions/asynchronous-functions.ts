// asynchronous functions
import { client } from '../../sanity/client';


export async function getContent() {
  const CONTENT_QUERY = `*[_type == "project"] {
  ...,
  coverImage {
    ...,
    asset->
  },
  duration {
    ...
  },
  tags[],
  body
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}