import React from 'react';
import './Notification.css';

const Notification = ({message}) => {
    return (<div className="notifacation">{ message}</div>);
};

export default Notification;