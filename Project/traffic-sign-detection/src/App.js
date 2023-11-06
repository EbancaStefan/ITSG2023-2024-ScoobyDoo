import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [imageUrl, setImageUrl] = useState("Question_mark.png");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <div className="box d-flex align-items-center justify-content-center">
        <div className="imageBox d-flex align-items-center justify-content-evenly">
          <label className="btn btn-lg btn-primary" htmlFor="img">Image Upload</label>
          <input id="img" className="d-none" type="file" accept="image/*" onChange={handleImageChange} />

          <img className="traffic-sign-image" id="imageId" src={imageUrl} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default App;

