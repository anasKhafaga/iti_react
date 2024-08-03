import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { Redirect } from 'react-router-dom';

const Fallback = ({ resetErrorBoundary }: FallbackProps) => {

  resetErrorBoundary();
  return (
    <Redirect to="/login" />
  )  
}

export default Fallback