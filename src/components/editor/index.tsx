import { useState } from 'react';
import ReactCompareImage from 'react-compare-image';

import css from './index.module.scss';
interface EditorProps {
  image: string;
}

function Editor({ image }: EditorProps) {
  const [editedImage, setEditedImage] = useState<string>(image);
  return (
    <div className={css.editorRoot}>
      <ReactCompareImage leftImage={image} rightImage={editedImage} />;
    </div>
  );
}

export default Editor;
