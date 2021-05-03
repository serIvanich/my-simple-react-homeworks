import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './HW5.module.css'

function Header() {
    const [collapsed, setCollapsed] = useState(true)

    function focusNav() {

        setCollapsed(false)
    }

    function lossFocusNav() {

        setCollapsed(true)
    }


    return (
        <div className={s.containerNav}>
            <div className={collapsed ? s.navLinks : s.navLinksAll} onClick={lossFocusNav}>
                <NavLink className={s.link} to={'/pre-junior'}>ret-junior</NavLink>
                <NavLink className={s.link} to={'/junior'}>junior</NavLink>
                <NavLink className={s.link} to={'/junior+'}>junior+</NavLink>
                <span className={s.collapsedButton} onMouseMove={focusNav}></span>
            </div>


        </div>
    )
}

export default Header
