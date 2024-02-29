
'use client'

import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { remark } from "remark";
import html from 'remark-html';

interface PostData {
  id: number;
  title: string;
  content: string;
}

const Post = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      
      const response = await fetch(`https://api.github.com/repos/mat-garcia/matgdev-blog/issues/${params.slug}`);
      const data = await response.json();
      const { content } = matter(data.body);
      const processedContent = await remark().use(html).process(content);
      setPost({ id: data.id, title: data.title, content: processedContent.toString() });
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;
