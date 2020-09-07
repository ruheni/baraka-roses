import React from 'react';
import styles from './SignUp.module.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Signup() {
  return (
    <div className={styles.Signup}>
      <h1 className= {styles.mainTitle} >Baraka Flowers</h1>

      <div className={styles.inputForm}>
          <Form>
              <h1>Sign Up as Admin</h1>
              <FormGroup>
                <Input className={styles.inputEntry} type="text" name="first_name" id="firstName" placeholder="First Name" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="text" name="last_name" id="lastName" placeholder="Last Name" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="email" name="email" id="Email" placeholder="Email" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="password" name="pass" id="Pass" placeholder="Password" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="password" name="confirmPass" id="confirmPass" placeholder="Confirm Password" />
              </FormGroup>

              <FormGroup check className={styles.checkBox}>
                <Label check>
                <Input type="checkbox" />{' '}
                Remember me!
                </Label>
              </FormGroup>

            <Button className={styles.signupBtn}>Sign Up</Button>
          </Form>
      </div>
    </div>
  );
}

export default Signup;
