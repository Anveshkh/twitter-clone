import React from 'react'
import './sidebar-option.css'

// IN REACT EVERY SINGLE COMPONENT SHOULD START WITH  A CAPITAL LETTER


function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption