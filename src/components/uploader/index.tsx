import { ChangeEvent, Dispatch, useRef } from "react";
import addImg from '../../assets/add.svg';
import css from './index.module.scss';

interface UploaderProps {
  setImage: Dispatch<string>;
}

function Uploader({ setImage }: UploaderProps) {

  const imageRef = useRef<HTMLInputElement>(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.value;
    console.log(`image = `, image);
  };


  return (
    <div className={css.uploader}>
      <label></label>
      <input
        ref={imageRef}
        type="image"
        className={css.fileHandler}
        onChange={handleImage}
      />
      <img
        src={addImg}
        className={css.addImg}
        onClick={() => {
          console.log(`imageRef.current -- `, imageRef.current);
          imageRef.current?.click();
        }}
      />
    </div>
  );
}

export default Uploader;
