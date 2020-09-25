import React from "react";
import styles from "./LogIn.module.css";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LogIn = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.Login}>
      <h1 className={styles.mainTitle}>Baraka Flowers</h1>

      <div className={styles.inputForm}>
        <h1>Log in</h1>
    <Form
      name="login_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email' }]}
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className={styles.forgotTxt} href="/reset">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" danger>
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default LogIn;
