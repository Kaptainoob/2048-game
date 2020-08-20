import React, { useState, useEffect, useContext } from 'react';
import './RegisterModal.css';
import Modal from './Modal';
import { useMutation } from '@apollo/client';
import { SnackbarContext } from '../contexts/SnackbarContext';
import { SnackbarType } from '../types';
import CREATE_USER from '../mutations/CreateUser';

export interface IRegisterModalProps extends React.Props<any> {
  close: () => void;
}

const RegisterModal = ({ close }: IRegisterModalProps) => {

  const { setSnackbarMessage } = useContext(SnackbarContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFirstNameValid: boolean = firstName.length > 3;
  const isLastNameValid: boolean = lastName.length > 3;
  const isEmailValid: boolean = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid: boolean = password.length > 3;
  const isRegisterButtonDisabled: boolean = !(
    isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid
  );

  const [createUser, createUserQuery] = useMutation<any>(CREATE_USER);
  const isRegistering: boolean = createUserQuery.loading;

  useEffect(() => {
    if (createUserQuery.data) {
      setSnackbarMessage({ message: 'You were registred', type: SnackbarType.Success });
      close();
    }
  }, [close, setSnackbarMessage, createUserQuery]);

  useEffect(() => {
    if (createUserQuery.error) {
      const message: string = createUserQuery.error.message;
      setSnackbarMessage({ message, type: SnackbarType.Error });
    }
  }, [setSnackbarMessage, createUserQuery.error])

  const register = () => {
    const name: string = `${firstName} ${lastName}`;
    createUser({
      variables: { name, email, password }
    }).catch(err => console.error(err));
  }

  return (
    <Modal>
      <div className="RegisterModal">
        <h2>Sign up for a free account</h2>
        <div className="form-container">
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name"/>
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name"/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div className="buttons-container">
          <button onClick={e => register()} disabled={isRegistering || isRegisterButtonDisabled}>Register</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
