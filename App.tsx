/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import EditProfileView from './src/components/views/EditProfileView';
import {UserProfile} from './src/models/UserProfile';
import {ProfileView} from './src/components/views/ProfileView';

function App(): JSX.Element {
  const [user, setUser] = useState<UserProfile | null>(null);

  return user ? (
    <ProfileView user={user} setUser={setUser} />
  ) : (
    <EditProfileView setUser={setUser} />
  );
}

export default App;
