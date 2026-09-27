import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="site-not-found">
      <p className="site-not-found-code">404</p>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/">Back to the homepage</Link>
    </div>
  );
}
