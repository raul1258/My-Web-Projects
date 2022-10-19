import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lowercase', 'success')
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('All Cleared', 'success')
}
const handleCopy = () => {
  let text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert('Text Copied', 'success')
}
const handleExtraSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert('Extra Spaces Removed', 'success')
}
    const handleOnChnage = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');


    return (
      <>
    <div className='container' style={{color :props.mode==='dark'?'white' : '#042743'}}>
        <h1>{props.headings}</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChnage} id = "myBox" placeholder="Enter text here" style={{backgroundColor :props.mode==='dark'?'grey' : 'white', color:props.mode==='dark'?'white' : '#042743'}}/>
      </Form.Group>
    </Form>
    <Button variant="primary" onClick={handleUpClick}>Convert to UpperCase</Button>{' '}
    <Button variant="primary" onClick={handleLoClick}>Convert to LowerCase</Button>{' '}
    <Button variant="primary" onClick={handleClearClick}>Clear Text</Button>{' '}
    <Button variant="primary" onClick={handleCopy}>CopyText</Button>{' '}
    <Button variant="primary" onClick={handleExtraSpace}>Remove Extra Spaces</Button>{' '}

    </div>

    <div className='container my-3' style={{color :props.mode==='dark'?'white' : '#042743'}}>
      <h2>Your Text Sumarry</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}

export default TextForm
