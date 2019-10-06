import React, { Component } from 'react'
import resume from '../res/Shardool_Resume.pdf'

const NavBar = props => (
    <div className='nav'>
        <ul className='links'>
        <li>
            <a href='#Home'>Home</a>
        </li>
        <li>
            <a href='#Projects'>Projects</a>
        </li>
        <li>
            <a href='#Experience'>Experience</a>
        </li>
        <li>
            <a href={resume} download>Resume</a>
        </li>
        
        </ul>
    </div>
)
export default NavBar