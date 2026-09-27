import { Fragment, type ReactNode } from 'react';
import type { ReadingTime } from 'nextra';
import { formatDate, parseDate } from '../lib/format';

type Props = { date?: string; updated?: string; readingTime?: ReadingTime };

// "Sep 26, 2026 · 3 min read · Updated Oct 2, 2026" under a post's title.
export function PostMeta({ date, updated, readingTime }: Props) {
  const parts: ReactNode[] = [];
  if (date) parts.push(<time dateTime={parseDate(date).toISOString().slice(0, 10)}>{formatDate(date)}</time>);
  if (readingTime?.minutes) parts.push(<span>{Math.max(1, Math.round(readingTime.minutes))} min read</span>);
  if (updated) parts.push(<span>Updated {formatDate(updated)}</span>);
  if (!parts.length) return null;

  return (
    <p className="site-post-meta">
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <span aria-hidden="true" className="site-post-meta-dot">·</span>}
          {part}
        </Fragment>
      ))}
    </p>
  );
}
