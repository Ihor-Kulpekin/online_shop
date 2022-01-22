import React from 'react';

import adminContent from './AdminContent.module.css'
import InputAdmin from "../../input/inputAdmin/InputAdmin";

const AdminContent = () => {
    return (
        <div className={adminContent.adminContent}>
            <InputAdmin/>
        </div>
    );
};

export default AdminContent;
