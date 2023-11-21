import {GoogleSignin} from '@react-native-google-signin/google-signin';
import config from '../../config';
import auth from '@react-native-firebase/auth';
const withGoogleSignin = async () => {
  GoogleSignin.configure({
    webClientId: config.webClientId,
  });
  try {
    const isSignedIn = await GoogleSignin.isSignedIn();

    console.log('isSignedIn', isSignedIn);
    if (!isSignedIn) {
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );

      // Sign in with Firebase using Google credentials
      await auth().signInWithCredential(googleCredential);
    } else {
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const SignInHelper = (isSignin: boolean, logic: () => {}) => {
  if (isSignin == true) {
    // withGoogleSignin();
    logic();
  } else {
    withGoogleSignin();
  }
};

export default SignInHelper;
