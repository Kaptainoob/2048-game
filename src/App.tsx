import React from 'react';
import './App.css';
import IsGameOnProvider from './contexts/IsGameOnContext';
import { UserProvider } from './contexts/UserContext';
import Main from './views/Main';
import SnackbarProvider from './contexts/SnackbarContext';
import Snackbar from './components/Snackbar';

const App = () => {

  return (
    <div className="App">
      <SnackbarProvider>
        <UserProvider>
          <IsGameOnProvider>
            <Main />
            <Snackbar />
          </IsGameOnProvider>
        </UserProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
