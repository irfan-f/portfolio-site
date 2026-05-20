import { FC, HTMLAttributes, ReactNode } from 'react';

export type ContentCardVariant = 'glass' | 'lifted';

export interface ContentCardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
  variant?: ContentCardVariant;
  media?: ReactNode;
  /** Extra classes on the media region (e.g. aspect / contain modifiers). */
  mediaClassName?: string;
  children: ReactNode;
}

const ContentCard: FC<ContentCardProps> = ({
  as: Tag = 'article',
  variant = 'glass',
  className = '',
  media,
  mediaClassName = '',
  children,
  ...rest
}) => (
  <Tag
    className={`content-card content-card--${variant} ${className}`.trim()}
    {...rest}
  >
    {media ? (
      <div className={`content-card__media ${mediaClassName}`.trim()}>{media}</div>
    ) : null}
    <div className="content-card__body">{children}</div>
  </Tag>
);

export default ContentCard;
