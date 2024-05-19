import { LinkProps } from 'next/link';

export type LinkButtonProps = LinkProps & {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'primary2' | 'navlink' | 'policy';
  className?: string;
  // onClick?: () => void;
};
