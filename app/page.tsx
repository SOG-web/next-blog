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
import React from 'react';
import { PostMetadata } from '../lib/postMetadata';
import PostPreview from './components/PostPreview';

const getPostMetadata = (): PostMetadata[] => {
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

  return posts;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => {
    return <PostPreview key={index} {...post} />;
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  );
}
