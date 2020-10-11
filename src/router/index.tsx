import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { SIGN_IN, SIGN_UP } from './urls';
import SignIn from '../components/authentication/sign-in';
import SignUp from '../components/authentication/sign-up';

const RequireAuth = ({ children }: any) => {
    // const authStore = useSelector((state) => state);

    // if (!authStore || authStore.user === null) {
    //     return <Redirect to={SIGN_IN} />;
    // }

    return children;
};

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path={SIGN_IN} component={SignIn} />
        <Route exact path={SIGN_UP} component={SignUp} />
        {/* TODO: Require login */}

        <RequireAuth>{/* TODO: Add components that can only be accessed when authenticated */}</RequireAuth>
    </Switch>
);

export default AppRouter;
