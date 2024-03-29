
import { useState } from 'react';
import './app.scss';
import Editor from './components/editor';
import Uploader from './components/uploader';

function App() {

  const [uploadedImage, setUploadedImage] = useState<string>('');

  return (
    <div className="app">
      {uploadedImage ? (
        <Editor image={uploadedImage} />
      ) : (
        <Uploader setImage={setUploadedImage} />
      )}
    </div>
  );
}

export default App
