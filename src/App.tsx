
import { useState } from 'react';
import Editor from './components/editor';
import Uploader from './components/uploader';
import css from './app.module.scss';

function App() {

  const [uploadedImage, setUploadedImage] = useState<File | null>();

  return (
    <div className={css.app}>
      {uploadedImage ? (
        <Editor image={uploadedImage} />
      ) : (
        <Uploader setImage={setUploadedImage} />
      )}
    </div>
  );
}

export default App
