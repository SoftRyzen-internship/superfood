export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  variant: string;
  className?: string;
}
