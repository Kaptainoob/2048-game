import React, { useState, useContext } from 'react';
import './Home.css';
import Leaderboard from '../components/Leaderboard';
import RegisterModal from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';
import { UserContext } from '../contexts/UserContext';
import { IsGameOnContext } from '../contexts/IsGameOnContext';

const Home = () => {

  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const openRegisterModal = () => setIsRegisterModalVisible(true);
  const closeRegisterModal = () => setIsRegisterModalVisible(false);

  const openLoginModal = () => setIsLoginModalVisible(true);
  const closeLoginModal = () => setIsLoginModalVisible(false);

  const { user } = useContext(UserContext);
  const { setIsGameOn } = useContext(IsGameOnContext)

  const loggedButton = <button onClick={() => setIsGameOn(true)}>New game</button>

  const notLoggedButtons = (
    <React.Fragment>
      <button onClick={openLoginModal}>Log in</button>
      <button onClick={openRegisterModal}>Register</button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="Home">
          <Leaderboard />
          <div className="buttons-container">
            { user ? loggedButton : notLoggedButtons }
          </div>
      </div>
      { isRegisterModalVisible ? <RegisterModal close={closeRegisterModal} /> : null }
      { isLoginModalVisible ? <LoginModal close={closeLoginModal} /> : null }
    </React.Fragment>
  );
};

export default Home;
