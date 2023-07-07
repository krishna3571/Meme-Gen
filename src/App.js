// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageUpload} /><br /><br />
//       {selectedImage && <img src={selectedImage} alt="Uploaded" width={500} />}
//     </div>
//   );
// };

// export default ImageUploader;


// import React, { useState } from 'react';
// import { CKEditor } from 'ckeditor4-react';

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [text1, setText1] = useState('');
//   const [text2, setText2] = useState('');
//   const [editMode1, setEditMode1] = useState(false);
//   const [editMode2, setEditMode2] = useState(false);
//   const [activeTextarea, setActiveTextarea] = useState('');
//   const [code, setCode] = useState('');

//   const handleEditorChange = (event) => {
//     const value = event.editor.getData();
//     if (activeTextarea === 'text1') {
//       setText1(value);
//     } else if (activeTextarea === 'text2') {
//       setText2(value);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

//   const handleTextClick1 = () => {
//     setEditMode1(true);
//     setActiveTextarea('text1');
//   };

//   const handleTextClick2 = () => {
//     setEditMode2(true);
//     setActiveTextarea('text2');
//   };

//   const handleTextBlur = () => {
//     setActiveTextarea('');
//     setEditMode1(false);
//     setEditMode2(false);
//   };

//   const handleCodeSubmit = () => {
//     setCode(activeTextarea === 'text1' ? text1 : text2);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageUpload} />
//       <br />
//       <br />
//       {selectedImage && (
//         <div style={{ position: 'relative', display: 'inline-block' }}>
//           <img src={selectedImage} alt="Uploaded" width={500} />
//           {editMode1 ? (
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '80%',
//                 height: '80%',
//               }}
//             >
//               <CKEditor
//                 data={text1}
//                 config={{
//                   toolbar: 'Basic',
//                 }}
//                 onChange={handleEditorChange}
//                 onBlur={handleTextBlur}
//               />
//               <button onClick={handleCodeSubmit}>Submit</button>
//             </div>
//           ) : (
//             <p
//               onClick={handleTextClick1}
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 fontSize: '24px',
//                 fontWeight: 'bold',
//                 color: 'white',
//                 cursor: 'pointer',
//               }}
//             >
//               {text1 || 'Click to edit text 1'}
//             </p>
//           )}
//           {editMode2 ? (
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '70%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '80%',
//                 height: '80%',
//               }}
//             >
//               <CKEditor
//                 data={text2}
//                 config={{
//                   toolbar: 'Basic',
//                 }}
//                 onChange={handleEditorChange}
//                 onBlur={handleTextBlur}
//               />
//               <button onClick={handleCodeSubmit}>Submit</button>
//             </div>
//           ) : (
//             <p
//               onClick={handleTextClick2}
//               style={{
//                 position: 'absolute',
//                 top: '70%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 fontSize: '24px',
//                 fontWeight: 'bold',
//                 color: 'white',
//                 cursor: 'pointer',
//               }}
//             >
//               {text2 || 'Click to edit text 2'}
//             </p>
//           )}
//           {code && (
//             <pre style={{ position: 'absolute', top: '10px', left: '10px', background: '#f5f5f5' }}>
//               <code>{code}</code>
//             </pre>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploader;
// // 



import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [activeTextarea, setActiveTextarea] = useState('');
  const [code, setCode] = useState('');

  const handleEditorChange = (event) => {
    const value = event.editor.getData();
    if (activeTextarea === 'text1') {
      setText1(value);
    } else if (activeTextarea === 'text2') {
      setText2(value);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleTextClick1 = () => {
    setEditMode1(true);
    setActiveTextarea('text1');
  };

  const handleTextClick2 = () => {
    setEditMode2(true);
    setActiveTextarea('text2');
  };

  const handleTextBlur = () => {
    setActiveTextarea('');
    setEditMode1(false);
    setEditMode2(false);
  };

  const handleCodeSubmit = () => {
    setCode(activeTextarea === 'text1' ? text1 : text2);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <br />
      <br />
      {selectedImage && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={selectedImage} alt="Uploaded" width={500} />
          {editMode1 ? (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
              }}
            >
              <CKEditor
                data={text1}
                config={{
                  toolbar: 'Basic',
                }}
                onChange={handleEditorChange}
                onBlur={handleTextBlur}
              />
              <button onClick={handleCodeSubmit}>Submit</button>
            </div>
          ) : (
            <p
              onClick={handleTextClick1}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              {text1 || 'Click to edit text 1'}
            </p>
          )}
          {editMode2 ? (
            <div
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
              }}
            >
              <CKEditor
                data={text2}
                config={{
                  toolbar: 'Basic',
                }}
                onChange={handleEditorChange}
                onBlur={handleTextBlur}
              />
              <button onClick={handleCodeSubmit}>Submit</button>
            </div>
          ) : (
            <p
              onClick={handleTextClick2}
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              {text2 || 'Click to edit text 2'}
            </p>
          )}
          {code && (
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
              <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;



