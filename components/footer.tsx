import Link from 'next/link';
import { Separator } from './ui/separator';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-8 text-sm max-w-4xl mx-auto px-4">
      <Separator className="mb-8" />

      <ul className="flex flex-col gap-2 md:flex-row md:gap-4 text-muted-foreground">
        <li>
          <Link
            href="/rss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <ArrowIcon />
            <span className="ml-2">RSS</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/FrancoisSchoeman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <ArrowIcon />
            <span className="ml-2">GitHub</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/FrancoisSchoeman/fsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <ArrowIcon />
            <span className="ml-2">View Source</span>
          </Link>
        </li>
      </ul>

      <p className="mt-8 text-muted-foreground">© {year} • Francois Schoeman</p>
    </footer>
  );
}
