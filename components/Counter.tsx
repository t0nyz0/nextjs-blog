'use client';

import { useState } from 'react';
import styles from './counter.module.css';

// A tiny interactive component, used in content/projects/writing-posts.mdx.
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" className={styles.counter} onClick={() => setCount((n) => n + 1)}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}
