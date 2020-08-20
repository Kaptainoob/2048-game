import React, { useContext, useEffect } from 'react';
import './Snackbar.css';
import { SnackbarContext } from '../contexts/SnackbarContext';
import { SnackbarType } from '../types';

const getBackgroundColor = (type: SnackbarType): string => {
    switch(type) {
        case SnackbarType.Success:
            return '#76cf82';
        case SnackbarType.Error:
            return '#ed522f';
        case SnackbarType.Warning:
            return '#ffcc00';
        default:
            return '#c7c7c7';
    }
}

const Snackbar = () => {

    const { snackbarMessage, setSnackbarMessage } = useContext(SnackbarContext);

    useEffect(() => {
        if (snackbarMessage) {
            const ref = setTimeout(() => setSnackbarMessage(null), 3000);
            return () => clearInterval(ref);
        }
    }, [snackbarMessage, setSnackbarMessage]);

    if (!snackbarMessage) {
        return null;
    }

    const snackbarContentStyle = {
        backgroundColor: getBackgroundColor(snackbarMessage.type)
    }

    return (
        <div className="Snackbar">
            <div className="snackbar-content" style={snackbarContentStyle}>{snackbarMessage.message}</div>
        </div>
    );
};

export default Snackbar;
