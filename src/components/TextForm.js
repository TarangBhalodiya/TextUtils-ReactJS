import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  const handleCapitlise = () => {
    setText(text.toUpperCase())
  }
  const handleLowerCase = () => {
    setText(text.toLowerCase())
  }
  const clearText = () => {
    setText("")
  }
  const copyText = () => {
    navigator.clipboard.writeText(text)
  }
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (

    <div className={`hero ${props.mode}`} >
      <h2>{props.title}</h2>
      <textarea rows={10} onChange={handleOnChange} value={text} placeholder='Enter text'></textarea>
      <div className='utilities'>
        <button id='capital' className={`button ${props.btnMode}`} onClick={handleCapitlise}>Convert To upperCase</button>
        <button id='small' className={`button ${props.btnMode}`} onClick={handleLowerCase}>Convert To LowerCase</button>        <button id='clear' className={`button ${props.btnMode}`} onClick={clearText}>Clear Text</button>
        <button id='copy' className={`button ${props.btnMode}`} onClick={copyText}>Copy Text</button>
        <button id='spacesRemove' className={`button ${props.btnMode}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
    <div className='disc'>
      <p><strong>{text.split(/\s+/).filter((element)=>{
        return element.length!==0}).length}</strong> number of words</p>
      <p><strong>{text.length}</strong> number of Characters</p>
      <h3 id='phead'>Preview</h3>
      <div className='preview'>
      <pre>{text.length===0? <strong>Enter text to view here</strong> : text}</pre>
      </div>
    </div>
    </div>
  )
}
// text.split(/\s+/).filter((element)=>{return element.length!==0}).length
// 
