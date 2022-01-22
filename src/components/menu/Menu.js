import React from 'react';

import menu from './Menu.module.css';

const Menu = () => {
    return (
        <div className={menu.menu}>
            <div className={menu.menu_left}>
                <div className={menu.menu_item}>Users</div>
                <div className={menu.menu_item}>Goods</div>
            </div>
            <div className={menu.menu_right}>
                <span className={menu.admin_text}>Admin</span> <span>Ihor Kulpekin</span>
            </div>
        </div>
    );
};

export default Menu;
