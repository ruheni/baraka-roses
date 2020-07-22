import React from 'react';
import styles from './LogIn.module.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LogIn() {
  return (
    <div className={styles.Login}>
      <h1 className= {styles.mainTitle} >Baraka Flowers</h1>

      <div className={styles.inputForm}>
          <Form>
              <h1>Log in</h1>

              <FormGroup>
                <Input className={styles.inputEntry} type="email" name="email" id="Email" placeholder="Email" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="password" name="pass" id="Pass" placeholder="Password" />
              </FormGroup>

              <FormGroup check className={styles.checkBox}>
                <Label check>
                <Input type="checkbox" />{' '}
                Remember me!
                </Label>
              </FormGroup>
              <a href="/" className={styles.forgotTxt}>Forgot password?</a>
            <Button className={styles.signupBtn}>Log In</Button>
          </Form>
      </div>
    </div>
  );
}

export default LogIn;
