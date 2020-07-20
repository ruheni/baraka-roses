import React from 'react';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Signup() {
  return (
    <div className="Signup">
      <h1 id="main_title" className="text-white">Baraka Flowers</h1>

      <div className="input_form">
          <Form>
              <h1>Sign Up as Admin</h1>
              <FormGroup>
                <Input className="inputEntry" type="text" name="first_name" id="firstName" placeholder="First Name" />
              </FormGroup>

              <FormGroup>
                <Input className="inputEntry" type="text" name="last_name" id="lastName" placeholder="Last Name" />
              </FormGroup>

              <FormGroup>
                <Input className="inputEntry" type="email" name="email" id="Email" placeholder="Email" />
              </FormGroup>

              <FormGroup>
                <Input className="inputEntry" type="password" name="password" id="Password" placeholder="Password" />
              </FormGroup>

              <FormGroup>
                <Input className="inputEntry" type="password" name="confirm_pass" id="confirmPass" placeholder="Confirm Password" />
              </FormGroup>

              <FormGroup check id="checkBox">
                <Label check>
                <Input type="checkbox" />{' '}
                Remember me!
                </Label>
              </FormGroup>

            <Button id="signupBtn">Sign Up</Button>
          </Form>
      </div>
    </div>
  );
}

export default Signup;
