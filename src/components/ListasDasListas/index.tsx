
type Image = {
  src: string;
  alt: string;
}

export type ListItem = {
  id?: string;
  img?: Image;
  label?: string;
  href?: string;
  description?: string;
  className?: string;
  external?: boolean;
};