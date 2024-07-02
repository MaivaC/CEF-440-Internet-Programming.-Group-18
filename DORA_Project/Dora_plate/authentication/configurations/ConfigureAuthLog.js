import React from 'react';
import { Button, View, Text } from 'react-native';
import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../styles/Homepage';

const auth0 = new Auth0({ domain: AUTH0_DOMAIN, clientId: AUTH0_CLIENT_ID });

export default function NApp() {
  const [accessToken, setAccessToken] = React.useState(null);

  const onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then(credentials => {
        setAccessToken(credentials.accessToken);
      })
      .catch(error => console.log(error));
  };

  const onLogout = () => {
    auth0.webAuth
      .clearSession()
      .then(() => {
        setAccessToken(null);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {accessToken ? (
        <>
          <Text>Logged In!</Text>
          <Button title="Log Out" onPress={onLogout} />
        </>
      ) : (
        <Button title="Log In" onPress={onLogin} />
      )}
    </View>
  );
}
