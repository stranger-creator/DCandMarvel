// Signup.tsx
"use client"
import React from 'react';
import styled from 'styled-components';

const Signup: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Create an Account</Title>
        <InputLabel>Name</InputLabel>
        <Input type="text" placeholder="Your Name" />
        <InputLabel>Email</InputLabel>
        <Input type="email" placeholder="Your Email" />
        <InputLabel>Password</InputLabel>
        <Input type="password" placeholder="Your Password" />
        <SignupButton>Sign Up</SignupButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export default Signup;
