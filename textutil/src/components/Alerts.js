import React from 'react'
import Alert from 'react-bootstrap/Alert';


function Alerts(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <Alert variant="success">
      <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
    </Alert>

  )
}

export default Alerts
