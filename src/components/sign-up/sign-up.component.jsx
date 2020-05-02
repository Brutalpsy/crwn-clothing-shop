import React from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({ ...this.initialState });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            onChange={this.handleChange}
            value={displayName}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            onChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            onChange={this.handleChange}
            value={password}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            onChange={this.handleChange}
            value={confirmPassword}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'> SIGN UP </CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
