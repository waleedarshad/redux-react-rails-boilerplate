import React, { Component } from 'react'

import './dashboard.css'
import logo from './logo.svg'

import VisibleLoginForm from '../../redux/containers/login'
import Button from 'react-mdl/lib/Button'

class Dashboard extends Component {

  handleValueChange (value, fieldId, propName) {
    this.props._appActions.changeData(value, fieldId, propName)
  }

  handleLogout (event) {
    event.preventDefault()
    this.props._authActions.logout()
  }

  render () {
    return (
      <div className='container'>
        <div className='App App-header'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div>
                  <div className='App-logo'>
                    <img src={logo} className='App-logo' alt='logo' />
                  </div>
                  <h6>Welcome to Redux + React + Rails boilerplate</h6>
                  <div className='subtitle'><span className='highlight'>React</span> provided via create-react-app package <i className='fa fa-heart highlight fa-1x' aria-hidden='true' /></div>
                </div>
              </div>
              <div className='row'>
                {this.props.token
                  ? <div>
                    <Button onClick={this.props._authActions.logout} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent loginbtn'>
                      Logout
                    </Button>
                    You are logged in!
                  </div>
                  : <VisibleLoginForm />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
