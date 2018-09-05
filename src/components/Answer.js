import React from 'react' 

const Answer = (props) => {
  return (
    <div style={{width: '80%', margin: 'auto', marginBottom: '30px', borderStyle: 'solid', padding: '15px'}}>
      <h1>Results</h1>
      <h3>
        <strong>{props.getSign(props.result.to)} {props.result.answer}</strong> 
      </h3>
      <h4>({props.getSign(props.result.from)} {props.result.value})</h4>
    </div>
  )
}

export default Answer 