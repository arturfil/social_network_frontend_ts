import React from 'react'
import {Form as FinalForm, Field} from 'react-final-form';
import { Button, Form } from 'semantic-ui-react';
import TextInput from '../../app/common/form/TextInput';

const LoginForm = () => {
  return (
    <>
      <FinalForm
        onSubmit={(values) => console.log(values)}
        render={({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name='email' component={TextInput} placeholder='Email'/>
            <Field name='password' component={TextInput} type="password" placeholder='Password'/>
            <Button positive content="Login"/>
          </Form>
        )}
      />
    </>
  )
}

export default LoginForm