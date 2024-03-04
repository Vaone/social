import { Button, Checkbox, Form, Input } from "antd";
import React, { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginComp: React.FC = () => {
  const [form] = Form.useForm();
  console.log('render');
  
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <h2>Login</h2>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="passsword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Enter
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

const Login = memo(LoginComp);

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
