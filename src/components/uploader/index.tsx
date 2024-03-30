import { ChangeEvent, Dispatch, useRef } from "react";
import addImg from '../../assets/add.svg';
import css from './index.module.scss';

interface UploaderProps {
  setImage: Dispatch<File>;
}

function Uploader({ setImage }: UploaderProps) {

  const imageRef = useRef<HTMLInputElement>(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    image && setImage(image);
  };


  return (
    <div className={css.uploader}>
      <label></label>
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
  );
}

export default Uploader;
