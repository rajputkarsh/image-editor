/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import addImg from '../../assets/add.svg';
import css from './index.module.scss';
import Bubble from '../bubble';
import Waves from '../waves';
import { delay } from '../../utils';

interface UploaderProps {
  setImage: Dispatch<string>;
}

function Uploader({ setImage }: UploaderProps) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [bubbleElements, setBubbleElements] = useState<Array<ReactNode>>([]);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];

    const reader = new FileReader();
    reader.onload = function () {
      const base64String = (reader.result || '') as string;
      setImage(base64String);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const renderBubbles = async () => {
    const data = [];
    for await (const _ of [1, 2, 3]) {
      data.push(
        <div className={css.imageContainer} key={crypto.randomUUID()}>
          <Bubble />
        </div>
      );
      delay(300);
    }

    return data;
  };

  useEffect(() => {
    async function getBubbles() {
      const bubbles = await renderBubbles();
      setBubbleElements(bubbles);
    }

    getBubbles();
  }, []);

  return (
    <div className={css.uploader}>
      {bubbleElements}
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
