import React, { activeKey } from 'react';
import s from './style.module.less'; // css modules
import { TarBar } from 'zarm';
// react 风格 原生js 函数式编程
// props
const NavBar = ({ showNav }) => {

    const [activeKey, setActiveKey] = React.useState('/')

    const changeTab = (itemKey) => {
        setActiveKey(itemKey)
    }

    return (
        <TarBar visible={showNav} activeKey={activeKey} onChange={changeTab}>
            <TarBar.Item 
            itemKey="/"
            title="账单"
            />
            <TarBar.Item 
            itemKey="/data"
            title="统计"
            />
            <TarBar.Item 
            itemKey="/user"
            title="我的"
            />
        </TarBar>
    )
}

export default NavBar;