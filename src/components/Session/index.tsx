// Home.tsx
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  ariaLabelledBy?: string; 
  children?: ReactNode;
};

export default function Session({ id, ariaLabelledBy, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy}>
      {children}
    </section>
  );
}

  
