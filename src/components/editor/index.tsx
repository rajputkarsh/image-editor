import { useState } from 'react';
import ReactCompareImage from 'react-compare-image';

import css from './index.module.scss';
import Customization from '../customization';
interface EditorProps {
  image: string;
}

function Editor({ image }: EditorProps) {
  const [editedImage, setEditedImage] = useState<string>(image);
  return (
    <div className={css.editorRoot}>
      <ReactCompareImage
        leftImage={image}
        sliderLineColor="rgb(0 0 0 / 0.6)"
        sliderLineWidth={5}
        rightImage={editedImage}
      />
      <Customization side={'right'} image={editedImage} setImage={setEditedImage} />
    </div>
  );
}

export default Editor;
