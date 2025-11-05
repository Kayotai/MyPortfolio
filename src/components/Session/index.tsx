// Home.tsx
import type { ReactNode } from "react";
import "./index.css"

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

  
