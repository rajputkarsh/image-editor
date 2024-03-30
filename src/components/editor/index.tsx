import { useState } from 'react';
import ReactCompareImage from 'react-compare-image';

import css from './index.module.scss';
interface EditorProps {
  image: File;
}

function Editor({ image }: EditorProps) {
  const [editedImage, setEditedImage] = useState<File>(image);
  return (
    <div className={css.editorRoot}>
      <ReactCompareImage leftImage={image} rightImage={editedImage} />;
    </div>
  );
}

export default Editor;
