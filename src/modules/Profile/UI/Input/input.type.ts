export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  iconStart?: boolean;
  Icon?: JSX.Element;
  register?: any;
  error?: string | null;
}
