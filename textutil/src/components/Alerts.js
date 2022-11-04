import React from 'react'
import Alert from 'react-bootstrap/Alert';


function Alerts(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <Alert variant="success">
      <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
    </Alert>}
    </div>
  )
}

export default Alerts
