import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FormRenderer from './FormRenderer'

const schema = {
  first_name: {
    label: 'First Name',
    position: {
      row: 1,
      column: 3
    },
    groupName: 'Contact',
    control: props => <input {...props} />
  },
  middle_name: {
    label: 'Middle Name',
    position: {
      row: 1,
      column: 1
    },
    groupName: 'Contact',
    control: props => <input {...props} />
  },
  last_name: {
    label: 'Last Name',
    position: {
      row: 1,
      column: 2
    },
    groupName: 'Personal',
    control: props => <textarea {...props} />
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormRenderer schema={schema} />
      </div>
    )
  }
}

export default App
