import "src/App.css";
import ImageUploader from "src/ImageUploader";
import React, { FC } from "react"

const App:FC=()=> {
  return (
    <div className="App">
      {/* uplodaer */}
      <ImageUploader />
    </div>
  );
}

export default App;
