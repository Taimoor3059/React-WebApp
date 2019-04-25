import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          firstName:'',
          lastName:'',
          email: '',
          gender:'',
          text:'',
          loading: true
      }
      this.handleChange = this.handleChange.bind(this);
      this.openForm = this.openForm.bind(this);
      this.submit = this.submit.bind(this);
   
  }

  handleChange(event) {
      let {name, value} = event.target
      this.setState({
          [name]: value
      })
  }

  openForm() {
      this.setState({
          loading: false
      })
  }
  submit() {
      this.setState({
          loading: true
      })
  }


  render() {
      return (
          <div>
              
              {
                  this.state.loading ?
                   <button onClick={this.openForm} id='conbut'>Contact Me</button> :
                   <form>
                       <input
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder='First Name'
                       /> <br />

                       <input 
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            placeholder='Last Name'
                        /> <br />

                        <input
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Email Address'
                        /> <br />

                        <label>
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Male' 
                                onChange={this.handleChange} 
                            /> Male
                            
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Female' 
                                onChange={this.handleChange} 
                            /> Female
                            
                        </label>
                        <br />
                            <textarea
                                name='text'
                                value={this.state.text}
                                onChange={this.handleChange}
                            >
                            </textarea>
                            <br />

                            <button onClick={this.submit} id='formopen'>Submit</button>
                            <br />
                        
                   </form>

              }
          </div>
          
      );
  }
    
}
export default App;







