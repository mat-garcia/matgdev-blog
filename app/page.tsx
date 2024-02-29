// pages/app/index.tsx

import { GetStaticProps } from 'next';
import Link from 'next/link';

interface PostData {
  id: number;
  number: number;
  title: string;
}

interface HomeProps {
  posts: PostData[];
}

async function getPosts() {
  const response = await fetch('https://api.github.com/repos/mat-garcia/matgdev-blog/issues?state=open');
  const data = await response.json();
  const posts = data.map((post: { id: number; number: number; title: string }) => ({
    id: post.id,
    number: post.number,
    title: post.title,
  }));
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post: PostData) => (
          <li key={post.id}>
            <Link href={`post/${post.number}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

