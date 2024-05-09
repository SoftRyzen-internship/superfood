export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary' | 'primary2' | 'readmore';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}
