import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextField = () => {

  const transparent = {
    backgroundColor:'rgba(0,0,0,0)',
    color: '#D561FC',
    border: "2px solid #D561FC",
    marginBottom: ".5em"
  }

  return (
    <Form>
      <TextArea placeholder='Enter your wish' style={transparent}/>
    </Form>
  )
}

export default TextField
