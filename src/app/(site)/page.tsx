import { getContent } from '@/actions/asynchronous-functions';

// Log content to console
getContent().then(content => console.log(content));

// Insert the return component calling `getContent()` below

export default function Home() {
  return <main></main>;
}
