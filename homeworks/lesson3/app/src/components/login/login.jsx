import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    
    //this.props.dispatch(userActions.logout()); // reset login status

    this.state = {
      email: '',
      password: '',
      email_msg: false,
      password_msg: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleMessage = event => {
    // eslint-disable-next-line 
    const { name, value } = event.target;
    const indx = [name]+'_msg';
    const message = value === '' ? true : false;
    // eslint-disable-next-line 
    this.state[indx] = message;
    const updateState = Object.assign({}, this.state[indx]);
        this.setState({updateState}, () => {
            console.log(this.state); // further value
        });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email === 'admin@test.com' && password === 'admin') {
          window.location.href = "/courses";
        }
  };

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted, email_msg,  password_msg} = this.state;

    return (
      <div className="login">
        <h1>Login</h1>
        <h2>admin@test.com : admin</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              name="email" 
              value={email} 
              onChange={this.handleChange}
              onBlur={this.handleMessage}
            />
            {email_msg &&
                            <div className="help-block">Please enter email.</div>
                        }
          </FormGroup>
          <FormGroup bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password" 
              value={password} 
              onChange={this.handleChange}
              onBlur={this.handleMessage}
            />
            {password_msg &&
                            <div className="help-block">Please enter password.</div>
                        }
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
                    </Button>
                    {loggingIn &&
                            <img alt="123" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
              {submitted &&
                            <div className="help-block">Submitted.</div>
                        }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // TODO: USE GLOBAL UPDATES
  return {};
}

const connectedLoginPage = connect(mapStateToProps)(Login); // subscribe to to Redux store updates
export { connectedLoginPage as Login };
