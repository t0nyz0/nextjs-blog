import { Fragment, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import site, { type IconName } from '../site.config';
import { formatMonth } from '../lib/format';
import { getPosts, type Post } from '../lib/posts';
import { Icon, externalProps } from './icons';
import styles from './home.module.css';

// Building blocks for content/index.mdx. Hero content comes from site.config.ts.

export function HomeLayout({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}

export function Hero() {
  const phrases = site.tagline.split(/,\s*/);
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.avatarRing}>
          <Image src={site.avatar} alt={site.author} width={112} height={112} className={styles.avatar} loading="eager" />
        </span>
        <div>
          <p className={styles.kicker}>Hi, I’m {site.author}</p>
          <h1 className={styles.title}>
            {phrases.map((phrase, i) => (
              <Fragment key={phrase}>
                {i > 0 && ' '}
                <span className={styles.phrase}>
                  {phrase}
                  {i < phrases.length - 1 && ','}
                </span>
              </Fragment>
            ))}
          </h1>
          <nav className={styles.links} aria-label="Links">
            {site.links.map((link) => (
              <a key={link.label} href={link.href} className={link.primary ? styles.btnPrimary : styles.btn} {...externalProps(link.href)}>
                {link.icon && <span className={styles.btnIcon}>{Icon[link.icon]}</span>}
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Section({ title, href, linkText, variant, children }: {
  title: string;
  href?: string;
  linkText?: string;
  variant?: 'goals';
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {href && (
          <Link href={href} className={styles.sectionLink}>
            {linkText} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      <div className={variant === 'goals' ? styles.goals : styles.sectionBody}>{children}</div>
    </section>
  );
}

function Thumb({ post, eager, sizes }: { post: Post; eager?: boolean; sizes: string }) {
  return (
    <div className={styles.thumb}>
      {post.image ? (
        <Image src={post.image} alt="" fill sizes={sizes} className={styles.thumbImg} loading={eager ? 'eager' : undefined} />
      ) : (
        <span className={styles.thumbText}>{post.title}</span>
      )}
    </div>
  );
}

function Meta({ post }: { post: Post }) {
  if (!post.tag && !post.date) return null;
  return (
    <p className={styles.cardMeta}>
      {post.tag && <span className={styles.tag}>{post.tag}</span>}
      {post.date && <time dateTime={post.date.slice(0, 10)}>{formatMonth(post.date)}</time>}
    </p>
  );
}

// Cards for every post in content/projects, newest first. With `featured`, the newest post
// gets a wide card and the rest sit in a grid underneath.
export async function ProjectGrid({ limit, featured }: { limit?: number; featured?: boolean }) {
  const posts = await getPosts();
  const list = limit ? posts.slice(0, limit) : posts;
  const [first, ...rest] = list;
  const cards = featured ? rest : list;
  if (!first) return <p className={styles.empty}>No posts yet.</p>;

  return (
    <div className={styles.gridWrap}>
      {featured && (
        <Link href={first.route} className={`${styles.card} ${styles.featured}`}>
          <Thumb post={first} eager sizes="(max-width: 768px) 100vw, 640px" />
          <div className={styles.featuredBody}>
            <Meta post={first} />
            <h3 className={styles.featuredTitle}>{first.title}</h3>
            {first.description && <p className={styles.cardBlurb}>{first.description}</p>}
            <span className={styles.readMore}>
              Read the post <span className={styles.arrow}>{Icon.arrow}</span>
            </span>
          </div>
        </Link>
      )}
      {cards.length > 0 && (
        <div className={styles.grid}>
          {cards.map((post, i) => (
            <Link key={post.route} href={post.route} className={styles.card} style={{ '--i': i } as CSSProperties}>
              <Thumb post={post} eager={!featured && i < 3} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 360px" />
              <div className={styles.cardBody}>
                <Meta post={post} />
                <h3 className={styles.cardTitle}>
                  {post.title}
                  <span className={styles.arrow}>{Icon.arrow}</span>
                </h3>
                {post.description && <p className={styles.cardBlurb}>{post.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function CallToAction({ eyebrow, title, href, label, icon, children }: {
  eyebrow?: string;
  title: string;
  href: string;
  label: string;
  icon?: IconName;
  children?: ReactNode;
}) {
  return (
    <section className={styles.cta}>
      <div>
        {eyebrow && <p className={styles.ctaEyebrow}>{eyebrow}</p>}
        <h2 className={styles.ctaTitle}>{title}</h2>
        {children && <div className={styles.ctaText}>{children}</div>}
      </div>
      <a className={styles.btnPrimary} href={href} {...externalProps(href)}>
        {icon && <span className={styles.btnIcon}>{Icon[icon]}</span>}
        {label}
      </a>
    </section>
  );
}
