import client, {handleClientError} from '../client';
import {
  ChangePasswordFormData,
  EditProfileFormData,
  LoginFormData,
  RegisterFormData,
} from '../../validators/user.validator';
import {User} from '../../types/user.types';

type LoginResponse = {
  message: string;
  user: User;
};
export const login = async (data: LoginFormData) => {
  try {
    const response = await client.post('/users/login', data);

    return response.data as LoginResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type RegisterResponse = {
  message: string;
  user: User;
};
export const register = async (data: RegisterFormData) => {
  try {
    const response = await client.post('/users/register', data);

    return response.data as RegisterResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type GetProfileResponse = {
  message: string;
  user: User;
};
export const getProfile = async () => {
  try {
    const response = await client.get('/users/profile');

    return response.data as GetProfileResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type UpdateProfileResponse = {
  message: string;
  user: User;
};
export const updateProfile = async (data: EditProfileFormData) => {
  try {
    const response = await client.put('/users/profile', data);

    return response.data as UpdateProfileResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type ChangePasswordResponse = {
  message: string;
};
export const changePassword = async (data: ChangePasswordFormData) => {
  try {
    const response = await client.put('/users/profile/password', data);

    return response.data as ChangePasswordResponse;
  } catch (error) {
    return handleClientError(error);
  }
};
