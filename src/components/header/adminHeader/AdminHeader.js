import React from 'react';

import adminHeader from './AdminHeader.module.css';
import Menu from "../../menu/Menu";

const AdminHeader = () => {
    return (
        <div className={adminHeader.admin_header}>
            <Menu/>
        </div>
    );
};

export default AdminHeader;
