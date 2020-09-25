import React from "react";
import styles from './ResetPass.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const ResetPass = () => {
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.resetPass}>
      <h1 className={styles.mainTitle}>Baraka Flowers</h1>

      <div className={styles.inputForm}>
        <h1>Reset Password</h1>
      <Form
        name="reset_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
       <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your E-mail!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="new_password"
          rules={[{ required: true, message: 'Please input your New Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="New Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          rules={[{ required: true, message: 'Please confirm password!' }]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle className={styles.checkBox}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" danger className={styles.signupBtn}>
            Log In
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
  );
};

export default ResetPass;
