import { Dispatch } from "react";

interface UploaderProps {
  setImage: Dispatch<string>;
}

function Uploader({ setImage }: UploaderProps) {
  return <div>Uploader</div>;
}

export default Uploader;
