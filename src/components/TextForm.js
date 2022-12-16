import React,{useState} from 'react'



export default function TextForm(props) {

  const handelCopyClick=()=>{
    navigator.clipboard.writeText(text);
  }

  const handelUpClick=()=>{
    var newText= text.toUpperCase();
    setText(newText)
  }

  const handelLowClick=()=>{

    var newText= text.toLowerCase();
    setText(newText)
  }

  const handelClearClick=()=>{
    var newText= text.replace(text,"");
    setText(newText)
  }
  

  const handelOnChange=(event)=>{
    setText(event.target.value);
  }
  

  const[text, setText] = useState('');


  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control"  value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-info mx-1" onClick={handelCopyClick}>Copy</button>
          <button className="btn btn-dark mx-1" onClick={handelUpClick}>Uppercase</button>
          <button className="btn btn-dark mx-1" onClick={handelLowClick}>Lowercase</button>
          <button className="btn btn-danger mx-1" onClick={handelClearClick}>Clear</button>

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.len>0?text:"Enter something in the textbox above to preview"}</p>
        
      </div>
    </>
  )
}
