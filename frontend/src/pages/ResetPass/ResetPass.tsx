import React from 'react';
import styles from './ResetPass.module.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function ResetPass() {
  return (
    <div className={styles.resetPass}>
      <h1 className= {styles.mainTitle} >Baraka Flowers</h1>

      <div className={styles.inputForm}>
          <Form>
              <h1>Reset password</h1>

              <FormGroup>
                <Input className={styles.inputEntry} type="email" name="email" id="Email" placeholder="Email" />
              </FormGroup>

              <FormGroup>
                <Input className={styles.inputEntry} type="password" name="pass" id="Pass" placeholder="New Password" />
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
              
            <Button className={styles.signupBtn}>Sign In</Button>
          </Form>
      </div>
    </div>
  );
}

export default ResetPass;
