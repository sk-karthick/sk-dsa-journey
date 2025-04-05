declare namespace JSX {
  interface IntrinsicElements {
    'sk-popup': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      open?: boolean;
      'custom-style'?: string;
    };
  }
}