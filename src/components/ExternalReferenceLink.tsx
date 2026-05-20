import { FC } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../icons';
import Icon from './Icon';
import { ThemeRasterPair } from './ThemeRasterPicture';
import {
  githubPrStatusLabel,
  useGithubPrStatus,
  type GithubPrStatus,
} from '../hooks/useGithubPrStatus';
import { rasterImageSet } from '../utils/rasterImage';
import {
  githubLinkAriaLabel,
  parseGithubLink,
  type GithubLinkMeta,
} from '../utils/githubLink';

function GitHubMark({ className }: { className?: string }) {
  return (
    <span className={`reference-link__icon relative block shrink-0 ${className ?? ''}`}>
      <ThemeRasterPair
        light={rasterImageSet('GitHub_Invertocat_Light')}
        dark={rasterImageSet('GitHub_Invertocat_Dark')}
        sizes="20px"
      />
    </span>
  );
}

function PrStatusBadge({ status }: { status: GithubPrStatus }) {
  return (
    <span
      className={`reference-link__status reference-link__status--${status} font-mulish shrink-0`}
    >
      {githubPrStatusLabel(status)}
    </span>
  );
}

function GithubLinkContent({
  meta,
  caption,
  prStatus,
}: {
  meta: GithubLinkMeta;
  caption: string;
  prStatus: GithubPrStatus | null;
}) {
  const repoLine = meta.repo;

  if (meta.kind === 'pr') {
    const statusSuffix =
      prStatus != null ? ` · ${githubPrStatusLabel(prStatus)}` : '';

    return (
      <span className="reference-link__text min-w-0 flex-1">
        <span className="reference-link__caption font-mulish block truncate">{caption}</span>
        <span className="reference-link__meta font-mulish block truncate">
          {repoLine} · Pull request #{meta.number}
          {statusSuffix}
        </span>
      </span>
    );
  }

  return (
    <span className="reference-link__text min-w-0 flex-1">
      <span className="reference-link__caption font-mulish block truncate">{caption}</span>
      <span className="reference-link__meta font-mulish block truncate">{repoLine} repository</span>
    </span>
  );
}

type ExternalReferenceLinkProps = {
  href: string;
  label: string;
  className?: string;
};

const ExternalReferenceLink: FC<ExternalReferenceLinkProps> = ({
  href,
  label,
  className = '',
}) => {
  const isExternal = href.startsWith('http');
  const github = isExternal ? parseGithubLink(href) : null;
  const prStatus = useGithubPrStatus(
    github?.kind === 'pr' ? github.owner : undefined,
    github?.kind === 'pr' ? github.repo : undefined,
    github?.kind === 'pr' ? github.number : undefined,
  );
  const prStatusLabel = prStatus != null ? githubPrStatusLabel(prStatus) : null;
  const ariaLabel = github
    ? githubLinkAriaLabel(github, label, prStatusLabel)
    : `${label} (opens in a new tab)`;

  if (github) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`reference-link ${className}`.trim()}
      >
        <GitHubMark className="h-8 w-8 sm:h-9 sm:w-9" />
        <GithubLinkContent meta={github} caption={label} prStatus={prStatus} />
        {github.kind === 'pr' && prStatus != null ? (
          <PrStatusBadge status={prStatus} />
        ) : null}
        <Icon
          src={icons.forwardArrow}
          className="reference-link__arrow svg-stroke-icon h-5 w-5 shrink-0 text-muted"
          aria-hidden
        />
      </a>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={label}
        className={`latest-post__link ${className}`.trim()}
      >
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
        <span aria-hidden> →</span>
      </a>
    );
  }

  return (
    <Link to={href} className={`latest-post__link ${className}`.trim()}>
      {label}
      <span aria-hidden> →</span>
    </Link>
  );
};

export default ExternalReferenceLink;
