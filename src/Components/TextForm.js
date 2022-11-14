import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClrClick = ()=>{
    let newText = ""
    setText(newText)
  }
    const handleOnChange = (event) =>{
        setText(event.target.value)
  }

const [text, setText] = useState('');
  return (
    <>
      <div style={{color : props.mode==='dark'?'skyblue':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor : props.mode ==='dark'?'purple':'white',color :props.mode ==='dark'?'skyblue':'black'}} value={text} onChange={handleOnChange} id ="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear</button>
      </div>
      <div className="container my-3" style={{color : props.mode ==='dark'?'skyblue':'black'}}>
        <h2>Summary</h2>
        <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
      </div>
    </>
  )
}
