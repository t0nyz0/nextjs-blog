import site from '../site.config';
import { externalProps } from './icons';

export function SiteFooter() {
  return (
    <div className="site-footer">
      <span>
        © {new Date().getFullYear()} {site.author}
      </span>
      <nav aria-label="Footer">
        {site.links.map((link) => (
          <a key={link.label} href={link.href} {...externalProps(link.href)}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
