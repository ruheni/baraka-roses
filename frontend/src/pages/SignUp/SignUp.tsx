import React from "react";
import styles from './SignUp.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NewLogin = () => {
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.Signup}>
      <h1 className={styles.mainTitle}>Baraka Flowers</h1>

      <div className={styles.inputForm}>
        <h1>Sign Up</h1>
      <Form
        name="signup_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstname"
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
        </Form.Item>
        
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your E-mail!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
  );
};

export default NewLogin;
