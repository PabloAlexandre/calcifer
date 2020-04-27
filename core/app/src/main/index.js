import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as apps from '@calcifer/apps/app';
import useSocket from '@calcifer/hooks/useSocket';

import Container, { containerContext } from '../components/Container/Container';

import UserProvider, { userContext } from './userContext';
import Login from './Login';
import Apps from './Apps';


export default function Wrap() {
  const [ isDebug ] = useState(window.location.href.includes('debug=true'));

  return (
    <Container isDebug={isDebug}>
      <UserProvider>
        <Main />
      </UserProvider>
    </Container>
  )
}

function withDefaultProps(Component, props) {
  return () => <Component {...props} />
}

function Main() {
  const { user, setUserData } = useContext(userContext);
  const socket = useSocket(undefined, 'APP_CLIENT', user.id);

  const defaultProps = {
    user,
    userContext,
    socket,
    containerContext
  };

  const AppWrapper = ({ match: { params } }) => apps[params.appName](defaultProps);

  return !user.id ? <Login submit={setUserData} /> : (
    <Switch>
      <Route path="/" exact component={withDefaultProps(Apps, defaultProps)} />
      <Route path="/:appName" component={AppWrapper} />
    </Switch>
  );
}