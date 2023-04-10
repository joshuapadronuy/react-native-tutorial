import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/context/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const { authenticate } = useContext(AuthContext)

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authenticate(token)
    } catch (error) {
      Alert.alert('Authentication failed!', 
      'Could not create user. Please check your credentials or try again later!'
      )
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;