import React from 'react';
import { Button, Form } from '../../src';
import styled from 'styled-components';
import { Stack } from '../../src/collections/Stack';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-block-size: 100vh;

  & > form {
    width: 50%;
  }
`;

const Login: React.FC = () => {
  return (
    <FormWrapper>
      <Form>
        <Stack>
          <Form.Control>
            <Form.Input placeholder="휴대폰 번호" large />
          </Form.Control>
          <Form.Control>
            <Form.Input placeholder="비밀번호" type="password" large />
          </Form.Control>
          <Button fullWidth round size="medium">
            로그인
          </Button>
        </Stack>
      </Form>
    </FormWrapper>
  );
};

export default Login;
