import { Dispatch } from "react";
import css from "./index.module.scss";

interface CustomizationProps {
  side: 'left' | 'right';
  image: string;
  setImage: Dispatch<string>;
}

function Customization({ side, image, setImage }: CustomizationProps) {
  return (
    <div className={`${css.customizationRoot} ${side == 'right' ? css.right : css.left}`}>
      <div className={css.title}>
        <span>Edit</span>
      </div>
    </div>
  );
}

export default Customization;
