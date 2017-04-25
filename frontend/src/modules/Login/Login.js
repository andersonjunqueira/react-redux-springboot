import React, { Component } from 'react';

import Card, { CardBody, CardGroup } from '../../components/Card';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <CardGroup className="mb-0">
              <Card className="p-2">
                  <CardBody>

                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-1">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-2">Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div>

                  </CardBody>
              </Card>
              <Card className="py-3 hidden-md-down" theme="primary" inverse={true}>
                  <CardBody className="text-center">

                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button type="button" className="btn btn-primary active mt-1">Register Now!</button>

                  </CardBody>
              </Card>         
            </CardGroup>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
