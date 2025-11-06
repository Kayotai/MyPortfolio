import './index.css'
import { type ListItem } from '../ListasDasListas';

type ListProps = {
  ariaLabelledBy?: string;
  ariaLabel?: string;
  className?: string;
  items: ListItem[];
};

export default function lists({ ariaLabelledBy, ariaLabel, items, className}: ListProps) {
  const ariaProps = ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : { "aria-label": ariaLabel ?? "Lista" };

  return (
    <ul className={className ?? ""} {...ariaProps}>
      {items.map((item, idx) => {
        const key = item.id ?? item.label ?? `item-${idx}`;
        return (
          <li key={key} className={item.className ?? undefined}>
            {item.img && (
              <img src={item.img.src} alt={item.img.alt} />
            )}

            {item.href ? (
              <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}

            {item.description && <p className="list-description">{item.description}</p>}
          </li>
        );
      })}
    </ul>
  );
}
