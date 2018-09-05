import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button, InputGroup, Col } from 'react-bootstrap';

class CurrencyForm extends React.Component {

  state = {
    value: '',
    from: 'USD',
    to: 'USD'
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const currencyExchange = {
      value: this.state.value,
      name: `${this.state.from}_${this.state.to}`
    }
    fetch('http://localhost:3000/api/v1/exchanges', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(currencyExchange)
    })
      .then(res => res.json())
      .then(answer => this.props.setAnswer(answer, this.state))
  }

  render() {
    return (
      <div style={{width: '80%', margin: '30px auto', borderStyle: 'solid', padding: '15px'}}>
        <h1>Convert Currency</h1><br/>
        <form onSubmit={this.handleSubmit}>

          <Col xs={6} md={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>From</ControlLabel>
              <FormControl 
                componentClass="select" 
                placeholder="select"
                name='from'
                onChange={this.handleChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SGD">SGD</option>
              </FormControl>
            </FormGroup>
          </Col>

          <Col xs={6} md={6}>
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>To</ControlLabel>
              <FormControl 
                componentClass="select" 
                placeholder="select"
                name='to'
                onChange={this.handleChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SGD">SGD</option>
              </FormControl>
            </FormGroup> 
          </Col>

          <FormGroup controlId="formBasicText" style={{paddingRight: '15px', paddingLeft: '15px'}}>
            <ControlLabel>Amount</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>{this.props.getSign(this.state.from)}</InputGroup.Addon>
              <FormControl 
                name='value'
                type='number'
                value={this.state.value}
                placeholder="Enter value to convert"
                onChange={this.handleChange}
              />
            </InputGroup>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>

      </div>
    )
  }
}

export default CurrencyForm