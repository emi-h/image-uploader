import { Button } from "@mui/material";
import React from "react";
import { useState } from "react"
import ImageLogo from "src/image.svg";
import "src/ImageUpload.css";
import storage from "src/firebase";
import { ref, uploadBytesResumable } from "firebase/storage"

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onfileUploadToFirebase = (e:React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files[0].name)
    if(e.target.files){
      const file = e.target.files[0];
      const storageRef = ref(storage, "image/" + file.name);
      // uploadBytes(storageRef, file).then((snapshot) => {
      //   console.log('Uploaded a blob or file!');
      // });
      const uploadImage = uploadBytesResumable(storageRef, file);

      uploadImage.on(
        "state_changed",
        (snapshot) => {
          setLoading(true);
        },
        (err) => {
          console.log(err);
        },
        () => {
          setLoading(false);
          setIsUploaded(true);
        }
      );
      return
    }

  };
  return (
    <>
      {loading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2> アップロード完了!</h2>
          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img src={ImageLogo} alt="imagelogo" />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input className="imageUploadInput" multiple name="imageURL" accept=".png,.jpeg,.jpg" type="file" onChange={onfileUploadToFirebase} />
              </div>
              <p>または</p>
              <Button variant="contained">
                ファイルを選択
                <input className="imageUploadInput" accept=".png,.jpeg,.jpg" type="file" onChange={onfileUploadToFirebase} />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUploader;
