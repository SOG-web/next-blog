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

import Link from 'next/link';
import { PostMetadata } from '../../lib/postMetadata';

export default function PostPreview(props: PostMetadata) {
  return (
    <div className='border border-violet-600 p-4 rounded-md shadow-md bg-white'>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold text-violet-600 hover:underline'>
          {props.title}
        </h2>
      </Link>
      <p className='text-sm text-slate-400'>{props.date}</p>
      <p className='text-slate-700'>{props.subtitle}</p>
    </div>
  );
}
