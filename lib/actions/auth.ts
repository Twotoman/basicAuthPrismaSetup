'use server';

import {signIn, signOut} from '@/auth';

export const login = async () => {
  
    await signIn('github', {redirectTo: '/'});
    console.log('Login function called');
};

export const logout = async () => {
  await signOut({redirectTo: '/login'});
  console.log('Logout function called');
};