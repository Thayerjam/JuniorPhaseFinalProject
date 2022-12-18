import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorView = ({ message = 'Uhh, bruh, an error has occured' }) => {
  const error = useRouteError();
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Opps Yo!</h2>
      <p>{message}</p>
    </div>
  );
};
