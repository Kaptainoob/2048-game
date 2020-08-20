import React, { useState, useContext, useEffect } from 'react';
import './LoginModal.css';
import Modal from './Modal';
import { useMutation } from '@apollo/client';
import { UserContext } from '../contexts/UserContext';
import { User, SnackbarType } from '../types';
import { SnackbarContext } from '../contexts/SnackbarContext';
import AUTHENTICATE_USER from '../mutations/AuthenticateUser';

export interface ILoginModalProps extends React.Props<any> {
  close: () => void;
}

const LoginModal = ({ close }: ILoginModalProps) => {

  const { setUser } = useContext(UserContext);
  const { setSnackbarMessage } = useContext(SnackbarContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid: boolean = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid: boolean = password.length > 3;
  const isLoginButtonDisabled: boolean = !(isEmailValid && isPasswordValid);

  const [authenticateUser, authenticateUserQuery] = useMutation<{ authenticateUserWithPassword : { token: string, item: User } }>(AUTHENTICATE_USER);
  const isLoggingIn: boolean = authenticateUserQuery.loading;

  useEffect(() => {
    if (authenticateUserQuery.data) {
      const { token, item } = authenticateUserQuery.data.authenticateUserWithPassword;
      window.sessionStorage.setItem('token', token);
      setUser(item);
      setSnackbarMessage({ message: 'You were logged in', type: SnackbarType.Success });
      close();
    }
  }, [close, setUser, setSnackbarMessage, authenticateUserQuery]);

  useEffect(() => {
    if (authenticateUserQuery.error) {
      const message: string = authenticateUserQuery.error.message;
      setSnackbarMessage({ message, type: SnackbarType.Error });
    }
  }, [setSnackbarMessage, authenticateUserQuery.error]);

  const login = () => {
    authenticateUser({
      variables: { email, password }
    }).catch(err => console.error(err));
  }

  return (
    <Modal>
      <div className="LoginModal">
        <h2>Login</h2>
        <div className="form-container">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div className="buttons-container">
          <button onClick={e => login()} disabled={isLoggingIn || isLoginButtonDisabled}>Login</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
