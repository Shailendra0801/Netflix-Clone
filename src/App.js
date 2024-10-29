import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks/use-auth-listener';

export function App() {
  const { user } = useAuthListener();

  return (
    // <Router>
    //   <Routes>
    //     <Route 
    //       path={ROUTES.SIGN_IN} 
    //       element={
    //         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
    //           <SignIn />
    //         </IsUserRedirect>
    //       } 
    //     />
    //     <Route 
    //       path={ROUTES.SIGN_UP} 
    //       element={
    //         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
    //           <SignUp />
    //         </IsUserRedirect>
    //       } 
    //     />
    //     <Route 
    //       path={ROUTES.BROWSE} 
    //       element={
    //         <ProtectedRoute user={user}>
    //           <Browse />
    //         </ProtectedRoute>
    //       } 
    //     />
    //     <Route 
    //       path={ROUTES.HOME} 
    //       element={
    //           <Home />
    //       } 
    //     />
    //     {/* Fallback for any unmatched routes */}
    //     <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
    //   </Routes>
    // </Router>

    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute
          user={uer}
          path={ROUTES.BROWSE}
          exact
        >
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
