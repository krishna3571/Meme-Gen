// import React, { useState } from 'react';
// import axios from 'axios';

// const Ex = () => {
//   const [image, setImage] = useState('');
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [generatedMeme, setGeneratedMeme] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       setImage(reader.result);
//     };
//   };

//   const generateMeme = async () => {
//     const response = await axios.post('https://api.imgflip.com/caption_image', {
//       template_id: 123456, // Replace with your meme template ID
//       username: 'your-username', // Replace with your username
//       password: 'your-password', // Replace with your password
//       text0: topText,
//       text1: bottomText
//     });

//     setGeneratedMeme(response.data.data.url);
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <img src={image} width={500} />
//       <input
//         type="text"
//         placeholder="Enter top text"
//         value={topText}
//         onChange={(e) => setTopText(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter bottom text"
//         value={bottomText}
//         onChange={(e) => setBottomText(e.target.value)}
//       />
//       <button onClick={generateMeme}>Generate Meme</button>
//       {generatedMeme && <img src={generatedMeme} alt="Generated Meme" />}
//     </div>
//   );
// };

// export default Ex;



// import React, { useState, useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Canvas } from 'canvas';

// const Ex = () => {
//   const [image, setImage] = useState(null);
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const canvasRef = useRef(null);

//   const onImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = function () {
//         setImage(img);
//       };
//       img.src = event.target.result;
//     };

//     reader.readAsDataURL(file);
//   };
//   const generateMeme = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Set canvas dimensions to match the desired width and maintain aspect ratio
//     const aspectRatio = image.width / image.height;
//     const canvasWidth = 500;
//     const canvasHeight = canvasWidth / aspectRatio;
//     canvas.width = canvasWidth;
//     canvas.height = canvasHeight;

//     // Draw the image on the canvas
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

//     // Add text to the canvas
//     ctx.font = '40px Impact';
//     ctx.fillStyle = 'white';
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 3;
//     ctx.textAlign = 'center';

//     // Add top text
//     ctx.fillText(topText, canvas.width / 2, 50);
//     ctx.strokeText(topText, canvas.width / 2, 50);

//     // Add bottom text
//     ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
//     ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
//   };


//   useEffect(() => {
//     if (image) {
//       generateMeme();
//     }
//   }, [image, topText, bottomText]);

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={onImageUpload} />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter top text"
//           value={topText}
//           onChange={(e) => setTopText(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter bottom text"
//           value={bottomText}
//           onChange={(e) => setBottomText(e.target.value)}
//         />
//       </div>
//       <canvas ref={canvasRef} />
//       <button onClick={generateMeme}>Generate Meme</button>
//     </div>
//   );
// };

// export default Ex;

// import React, { useState, useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Canvas } from 'canvas';

// const Ex = () => {
//   const [image, setImage] = useState(null);
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const canvasRef = useRef(null);
//   const [topTextOptions, setTopTextOptions] = useState({
//     color: '#ffffff',
//     bold: false,
//     backgroundColor: 'transparent',
//     fontSize: '40',
//   });
//   const [bottomTextOptions, setBottomTextOptions] = useState({
//     color: '#ffffff',
//     bold: false,
//     backgroundColor: 'transparent',
//     fontSize: '40',
//   });

//   const onImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = function () {
//         setImage(img);
//       };
//       img.src = event.target.result;
//     };

//     reader.readAsDataURL(file);
//   };

//   const generateMeme = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Set canvas dimensions to match the desired width and maintain aspect ratio
//     const aspectRatio = image.width / image.height;
//     const canvasWidth = 500;
//     const canvasHeight = canvasWidth / aspectRatio;
//     canvas.width = canvasWidth;
//     canvas.height = canvasHeight;

//     // Draw the image on the canvas
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

//     // Add text to the canvas
//     ctx.textAlign = 'center';

//     // Add top text
//     ctx.font = `${topTextOptions.bold ? 'bold ' : ''}${topTextOptions.fontSize}px Impact`;
//     ctx.fillStyle = topTextOptions.color;
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 3;
//     ctx.fillStyle = topTextOptions.backgroundColor;
//     ctx.fillRect(0, 0, canvas.width, 60); // Add background rectangle for text
//     ctx.fillStyle = topTextOptions.color; // Set fill style after the background rectangle
//     ctx.fillText(topText, canvas.width / 2, 50);
//     ctx.strokeText(topText, canvas.width / 2, 50);

//     // Add bottom text
//     ctx.font = `${bottomTextOptions.bold ? 'bold ' : ''}${bottomTextOptions.fontSize}px Impact`;
//     ctx.fillStyle = bottomTextOptions.color;
//     ctx.fillStyle = bottomTextOptions.backgroundColor;
//     ctx.fillRect(0, canvas.height - 60, canvas.width, 60); // Add background rectangle for text
//     ctx.fillStyle = bottomTextOptions.color; // Set fill style after the background rectangle
//     ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
//     ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
//   };

//   useEffect(() => {
//     if (image) {
//       generateMeme();
//     }
//   }, [image, topText, bottomText, topTextOptions, bottomTextOptions]);

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={onImageUpload} />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter top text"
//           value={topText}
//           onChange={(e) => setTopText(e.target.value)}
//         />
//         <input
//           type="color"
//           value={topTextOptions.color}
//           onChange={(e) =>
//             setTopTextOptions((prevOptions) => ({ ...prevOptions, color: e.target.value }))
//           }
//         />
//         <label>
//           <input
//             type="checkbox"
//             checked={topTextOptions.bold}
//             onChange={(e) =>
//               setTopTextOptions((prevOptions) => ({ ...prevOptions, bold: e.target.checked }))
//             }
//           />
//           Bold
//         </label>
//         <label>
//           Background Color:{' '}
//           <input
//             type="color"
//             value={topTextOptions.backgroundColor}
//             onChange={(e) =>
//               setTopTextOptions((prevOptions) => ({
//                 ...prevOptions,
//                 backgroundColor: e.target.value,
//               }))
//             }
//           />
//         </label>
//         <label>
//           Font Size:{' '}
//           <input
//             type="number"
//             min="1"
//             value={topTextOptions.fontSize}
//             onChange={(e) =>
//               setTopTextOptions((prevOptions) => ({
//                 ...prevOptions,
//                 fontSize: e.target.value,
//               }))
//             }
//           />
//         </label>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter bottom text"
//           value={bottomText}
//           onChange={(e) => setBottomText(e.target.value)}
//         />
//         <input
//           type="color"
//           value={bottomTextOptions.color}
//           onChange={(e) =>
//             setBottomTextOptions((prevOptions) => ({ ...prevOptions, color: e.target.value }))
//           }
//         />
//         <label>
//           <input
//             type="checkbox"
//             checked={bottomTextOptions.bold}
//             onChange={(e) =>
//               setBottomTextOptions((prevOptions) => ({ ...prevOptions, bold: e.target.checked }))
//             }
//           />
//           Bold
//         </label>
//         <label>
//           Background Color:{' '}
//           <input
//             type="color"
//             value={bottomTextOptions.backgroundColor}
//             onChange={(e) =>
//               setBottomTextOptions((prevOptions) => ({
//                 ...prevOptions,
//                 backgroundColor: e.target.value,
//               }))
//             }
//           />
//         </label>
//         <label>
//           Font Size:{' '}
//           <input
//             type="number"
//             min="1"
//             value={bottomTextOptions.fontSize}
//             onChange={(e) =>
//               setBottomTextOptions((prevOptions) => ({
//                 ...prevOptions,
//                 fontSize: e.target.value,
//               }))
//             }
//           />
//         </label>
//       </div>
//       <canvas ref={canvasRef} />
//       <button onClick={generateMeme}>Generate Meme</button>
//     </div>
//   );
// };

// export default Ex;






import React, { useState, useRef, useEffect } from 'react';

const Ex = () => {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const canvasRef = useRef(null);
  const [topTextOptions, setTopTextOptions] = useState({
    color: '#ffffff',
    bold: false,
    backgroundColor: 'transparent',
    fontSize: '40',
  });
  const [bottomTextOptions, setBottomTextOptions] = useState({
    color: '#ffffff',
    bold: false,
    backgroundColor: 'transparent',
    fontSize: '40',
  });

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        setImage(img);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  const generateMeme = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the desired width and maintain aspect ratio
    const aspectRatio = image.width / image.height;
    const canvasWidth = 500;
    const canvasHeight = canvasWidth / aspectRatio;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Add text to the canvas
    ctx.textAlign = 'center';

    // Add top text
    ctx.font = `${topTextOptions.bold ? 'bold ' : ''}${topTextOptions.fontSize}px Impact`;
    ctx.fillStyle = topTextOptions.color;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = topTextOptions.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, 60); // Add background rectangle for text
    ctx.fillStyle = topTextOptions.color; // Set fill style after the background rectangle
    ctx.fillText(topText, canvas.width / 2, 50);
    ctx.strokeText(topText, canvas.width / 2, 50);

    // Add bottom text
    ctx.font = `${bottomTextOptions.bold ? 'bold ' : ''}${bottomTextOptions.fontSize}px Impact`;
    ctx.fillStyle = bottomTextOptions.color;
    ctx.fillStyle = bottomTextOptions.backgroundColor;
    ctx.fillRect(0, canvas.height - 60, canvas.width, 60); // Add background rectangle for text
    ctx.fillStyle = bottomTextOptions.color; // Set fill style after the background rectangle
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
  };

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'meme.png';
    link.click();
  };

  useEffect(() => {
    if (image) {
      generateMeme();
    }
  }, [image, topText, bottomText, topTextOptions, bottomTextOptions]);

  return (
    <div>
      <input type="file" accept="image/*" onChange={onImageUpload} />
      <div>
        <input
          type="text"
          placeholder="Enter top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="color"
          value={topTextOptions.color}
          onChange={(e) =>
            setTopTextOptions((prevOptions) => ({ ...prevOptions, color: e.target.value }))
          }
        />
        <label>
          <input
            type="checkbox"
            checked={topTextOptions.bold}
            onChange={(e) =>
              setTopTextOptions((prevOptions) => ({ ...prevOptions, bold: e.target.checked }))
            }
          />
          Bold
        </label>
        <label>
          Background Color:{' '}
          <input
            type="color"
            value={topTextOptions.backgroundColor}
            onChange={(e) =>
              setTopTextOptions((prevOptions) => ({
                ...prevOptions,
                backgroundColor: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Font Size:{' '}
          <input
            type="number"
            min="1"
            value={topTextOptions.fontSize}
            onChange={(e) =>
              setTopTextOptions((prevOptions) => ({
                ...prevOptions,
                fontSize: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <input
          type="color"
          value={bottomTextOptions.color}
          onChange={(e) =>
            setBottomTextOptions((prevOptions) => ({ ...prevOptions, color: e.target.value }))
          }
        />
        <label>
          <input
            type="checkbox"
            checked={bottomTextOptions.bold}
            onChange={(e) =>
              setBottomTextOptions((prevOptions) => ({ ...prevOptions, bold: e.target.checked }))
            }
          />
          Bold
        </label>
        <label>
          Background Color:{' '}
          <input
            type="color"
            value={bottomTextOptions.backgroundColor}
            onChange={(e) =>
              setBottomTextOptions((prevOptions) => ({
                ...prevOptions,
                backgroundColor: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Font Size:{' '}
          <input
            type="number"
            min="1"
            value={bottomTextOptions.fontSize}
            onChange={(e) =>
              setBottomTextOptions((prevOptions) => ({
                ...prevOptions,
                fontSize: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <canvas ref={canvasRef} />
      <button onClick={generateMeme}>Generate Meme</button>
      <button onClick={downloadMeme}>Download Meme</button>
    </div>
  );
};

export default Ex;

