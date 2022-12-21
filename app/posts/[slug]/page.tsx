/**
 * Copyright 2022 ROU Technology
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const file = `posts/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const files = fs.readdirSync('posts/');
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const posts = markdownFiles.map((filename) => {
    const file = `posts/${filename}`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return {
      slug: filename.replace('.md', ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
    };
  });

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Post = (props: any) => {
  const slug = props.params.slug;

  const post = getPostContent(slug);

  return (
    <div>
      <h1 className='text-2xl text-violet-600'>{post.data.title}</h1>
      <article className='prose lg:prose-xl'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Post;
