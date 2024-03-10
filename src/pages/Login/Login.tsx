import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { memo, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { loginTC } from '../../redux/auth-reducer';
import { setError } from '../../redux/common-reducer';
import { useAppDispatch, useAppSelector } from '../../redux/redux-store';

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginComp: React.FC = () => {
  const isLogged = useAppSelector((state) => state.authUser.isAuth);
  const reqErr = useAppSelector((state) => state.anyPage.error);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reqErr) {
      message.error(reqErr);
      setTimeout(() => {
        dispatch(setError(null));
      }, 3000);
    }
  }, [reqErr]);

  const onFinish = (values: Inputs) => {
    dispatch(loginTC(values.email, values.password, values.remember));
  };

  if (isLogged) {
    return <Redirect to="/" />;
  }

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
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
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
