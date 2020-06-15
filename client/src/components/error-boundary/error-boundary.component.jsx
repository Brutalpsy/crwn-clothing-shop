import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-bundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      isErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      isErrored: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.isErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'} />
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
