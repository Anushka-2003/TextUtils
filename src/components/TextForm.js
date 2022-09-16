import React, {useState} from "react";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success")
  }

  const handleLpClick = () => {
    let newLText = text.toLowerCase();
    setText(newLText);
    props.showAlert("Converted to Lower Case!", "success")
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Text file Downloaded", "success")
  }

  const handleCopy = () => {
      copy(text);
      props.showAlert("Copied to Clipboard!", "success")
  }

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "danger")
  }
  
  const handleOnChange = (event) => {
    // console.log("uppercase on change");
    setText(event.target.value)

  }

  const [text, setText] = useState("Enter text here");
  
// text = "new text"; wrong way to change the text
     // correct way to change the text
    //  setText("nebw text");

  return (
    <>
    <div style={{"padding-top": "10px"}} className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLpClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownload}>Download Text</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy to Clipboard</button>
      <button className="btn btn-danger mx-1" onClick={handleClear}>Clear All</button>
    </div>

    <div className="container my-4">
      <h1>Your text summary</h1>
      <p>{text.trim().split(" ").length} words {text.trim().length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text: "Enter your text to preview here..."}</p>
    </div>

    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
