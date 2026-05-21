import { FC, HTMLAttributes, ReactNode } from 'react';

export type ContentCardVariant = 'glass' | 'lifted';

export interface ContentCardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
  variant?: ContentCardVariant;
  media?: ReactNode;
  /** Extra classes on the media region (e.g. aspect / contain modifiers). */
  mediaClassName?: string;
  /** Title and body render above media (helps hash scroll land on the heading). */
  textFirst?: boolean;
  children: ReactNode;
}

const ContentCard: FC<ContentCardProps> = ({
  as: Tag = 'article',
  variant = 'glass',
  className = '',
  media,
  mediaClassName = '',
  textFirst = false,
  children,
  ...rest
}) => {
  const body = <div className="content-card__body">{children}</div>;
  const mediaNode = media ? (
    <div className={`content-card__media ${mediaClassName}`.trim()}>{media}</div>
  ) : null;

  return (
    <Tag
      className={`content-card content-card--${variant} ${className}`.trim()}
      {...rest}
    >
      {textFirst ? (
        <>
          {body}
          {mediaNode}
        </>
      ) : (
        <>
          {mediaNode}
          {body}
        </>
      )}
    </Tag>
  );
};

export default ContentCard;
