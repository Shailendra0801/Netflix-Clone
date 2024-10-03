import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={() => {
          if (!user) {
            return children;
          }

          return (
            <Navigate
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }}
      />
    </Routes>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }

          return (
            <Navigate
              to={{
                pathname: '/signin', 
                state: { from: location },
              }}
            />
          );
        }}
      />
    </Routes>
  );
}
