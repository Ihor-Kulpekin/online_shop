import React from 'react';

import inputAdmin from './InputAdmin.module.css'
import Switcher from "../../switcher/Switcher";

const InputAdmin = () => {
    return (
            <div className={inputAdmin.wrapper_input}>
                <input placeholder="Search..." className={inputAdmin.input_admin} type="text"/>
                <Switcher/>
            </div>
    );
};

export default InputAdmin;
