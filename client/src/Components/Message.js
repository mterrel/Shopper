import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Message = ({ variant, text }) => {
    console.log("message",text)
  return (
      <Alert variant={variant} className="text-center">
          {text}
   </Alert>
  )
}
Message.defaultProps = {
    variant:"info"
}
export default Message
