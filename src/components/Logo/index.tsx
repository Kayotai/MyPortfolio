import type { FC } from "react";
import "./index.css";

const Logo: FC = () => {
  return (
    <div className="Logo-wrap">
      {/* elemento visual com neon — escondido de leitores de tela */}
      <p className="Logo" aria-hidden="true">
        {"<Hiago />"}
      </p>

    </div>
  );
};

export default Logo;
