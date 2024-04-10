'use client'
import Header from '@/app/_components/header';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface PostData {
  id: number;
  title: string;
  body: string; 
}

const Post = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://api.github.com/repos/mat-garcia/matgdev-blog/issues/${params.slug}`);
      const data: PostData = await response.json();
      setPost(data);
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (!post) return <div className="flex items-center justify-center h-screen animate-bounce">
  <div className="animate-spin  text-5xl ">{'</>'}</div>
</div>;

  return (
    <>
    <Header screen='posts'></Header>
    <div className='flex flex-col items-center justify-center pt-14'>
      <div >
        <h1 className='px-4'>{post.title}</h1>
        <article className='prose prose-slate xl:prose-xl prose-sm prose-invert w-screen px-4'>

          <ReactMarkdown>{post.body}</ReactMarkdown>
        </article>
      </div>
      
    </div>
    </>
  );
};

export default Post;
