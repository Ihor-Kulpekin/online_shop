import React from 'react';

import switcher from './Switcher.module.css'

const Switcher = () => {
    return (
            <select className={switcher.switcher}>
                <option value="id">Id</option>
                <option value="Name">Name</option>
            </select>
    );
};

export default Switcher;
