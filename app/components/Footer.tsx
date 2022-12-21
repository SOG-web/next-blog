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

import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='border-t border-slate-500 mt-6 py-6'>
        <p className='text-center text-slate-400'>
          © 2021 - {new Date().getFullYear()} SOG-web's Blog. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
