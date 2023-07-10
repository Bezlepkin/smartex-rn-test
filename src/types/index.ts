import React from 'react';
import {UserProfile} from '../models/UserProfile';

export interface UserFormType {
  bio: string;
  name: string;
  email: string;
}

export interface UniversityType {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  'state-province': string | null;
  web_pages: string[];
}

export interface EditProfileViewProps {
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

export interface ProfileViewProps {
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  user: UserProfile;
}
