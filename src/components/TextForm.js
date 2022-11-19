import React,{useState} from 'react'


export default function TextForm(props) {

  const handelUpClick=()=>{
    console.log("Uppercase was clicked")
    var newText= text.toUpperCase();
    setText(newText)
  }

  const handelLowClick=()=>{
    console.log("Uppercase was clicked")
    var newText= text.toLowerCase();
    setText(newText)
  }

  const handelOnChange=(event)=>{
    setText(event.target.value);
  }
  

  const[text, setText] = useState('');


  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handelLowClick}>Convert to Lowercase</button>

      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        
      </div>
    </>
  )
}
