import React from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles.jsx';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

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
    const { signUp } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUp({
      email,
      password,
      displayName,
    });
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
const mapDispatchToProps = (dispatch) => ({
  signUp: (credentials) => dispatch(signUpStart(credentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
