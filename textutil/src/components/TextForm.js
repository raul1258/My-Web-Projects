import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
}
    const handleOnChnage = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');


    return (
      <>
    <div className='container'>
        <h1>{props.headings}</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChnage} placeholder="Enter text here"/>
      </Form.Group>
    </Form>
    <Button variant="primary" onClick={handleUpClick}>Convert to UpperCase</Button>{' '}
    <Button variant="primary" onClick={handleLoClick}>Convert to LowerCase</Button>{' '}
    <Button variant="primary" onClick={handleClearClick}>Clear Text</Button>{' '}

    </div>

    <div className='container my-3'>
      <h2>Your Text Sumarry</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>


    </div>
    </>
  )
}

export default TextForm
