import { ChangeEvent, Dispatch, useRef } from 'react';
import addImg from '../../assets/add.svg';
import css from './index.module.scss';
import Bubble from '../bubble';
import Waves from '../waves';

interface UploaderProps {
  setImage: Dispatch<File>;
}

function Uploader({ setImage }: UploaderProps) {
  const imageRef = useRef<HTMLInputElement>(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    image && setImage(image);
  };

  const renderBubbles = () => {
    const data = [];
    for (let i = 0; i < 3; i++) {
      data.push(
        <div className={css.imageContainer} key={crypto.randomUUID()}>
          <Bubble />
        </div>
      );
    }

    return data;
  };

  return (
    <div className={css.uploader}>
      {renderBubbles()}
      <h1 className={`${css.title}`}>Image Optimizer</h1>
      <div className={css.imageContainer}>
        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          className={css.fileHandler}
          onChange={handleImage}
        />
        <img
          src={addImg}
          className={css.addImg}
          onClick={() => {
            imageRef.current?.click();
          }}
        />
      </div>
      <Waves />
    </div>
  );
}

export default Uploader;
