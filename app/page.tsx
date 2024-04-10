// pages/app/index.tsx

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Card, CardContent } from './_components/ui/card';
import { useRouter } from 'next/navigation';
import Header from './_components/header';
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ReactMarkdown from 'react-markdown';

interface PostData {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

interface HomeProps {
  posts: PostData[];
}

async function getPosts() {
  const response = await fetch('https://api.github.com/repos/mat-garcia/matgdev-blog/issues?state=open');
  const data = await response.json();
  const posts = data.map((post: PostData) => ({
    id: post.id,
    number: post.number,
    title: post.title,
    created_at: post.created_at,
    body: post.body
  }));
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
    <Header screen="main"></Header>
    <div className='flex flex-col justify-center items-center w-full pt-14 px-3'>
       <div className='flex flex-col'>
          <h1 className='border-b border-solid pb-1 border-cyan-400'>Last Posts</h1>
       </div>
        <div className='flex flex-col gap-6 pt-8'>

       
          {posts.map((post: PostData) => (
            
            <Card key={post.id} className='p-3 max-w-96 md:max-w-2xl'>
              <p className='text-xs text-gray-400'>{format(post.created_at, "dd'/'MM'/'yyyy'",{locale: ptBR })}</p>
              <Link href={`post/${post.number}`} className='hover:text-cyan-500'>
                <h2 className='text-xl'>{post.title}</h2>
              </Link>
              <CardContent className='overflow-hidden'>
                <p className='text-sm text-gray-600 line-clamp-4'>
                <article className='pt-2'>

                  <ReactMarkdown>{post.body}</ReactMarkdown>
                </article>
                </p>
              </CardContent>

            </Card>
            
          ))}
        </div>
    </div>
    </>
  );
};

