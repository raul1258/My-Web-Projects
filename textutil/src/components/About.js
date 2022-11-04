import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Heading from './Heading';



function About(props) {
  let myStyle ={
    color: props.mode === 'dark' ? 'white' : 'black',
    backGround: props.mode === 'dark' ? 'black' : 'white'
  }
  return (
   
    <div className='container' style={myStyle}>
        <h1>About Us </h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Analyze Your Text</Accordion.Header>
        <Accordion.Body >
          Textutils gives you a way to analyze your text quickly and efficiently . Be it word count, character or Preview Section.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Free to Use</Accordion.Header>
        <Accordion.Body>
          TextUtils is a free character counter tool that provides instant character count statistics for a given text. TextUtils reports the number of words and characters. Thus it is a suitable for writing text with word/character limit.  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Browser Compatible</Accordion.Header>
        <Accordion.Body>
          The word counter software works in any web browserss such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

export default About
