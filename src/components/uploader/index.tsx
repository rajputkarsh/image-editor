import { ChangeEvent, Dispatch, useRef } from "react";
import addImg from '../../assets/add.svg';
import css from './index.module.scss';

interface UploaderProps {
  setImage: Dispatch<string>;
}

function Uploader({ setImage }: UploaderProps) {

  const imageRef = useRef<HTMLInputElement>(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {

  };


  return (
    <div className={css.uploader}>
      <label></label>
      <input ref={imageRef} type="file" className={css.fileHandler} />
      <img src={addImg} className={css.addImg} onClick={() => {
        imageRef.current?.click();
      }} />
    </div>
  );
}

export default Uploader;
