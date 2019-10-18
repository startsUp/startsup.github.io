import info from '../res/info'
import React, { Component } from 'react'
import Card from './card' 
import Stepper from './stepper'
import { Paper } from '@material-ui/core';
export const Section = props => (
    <Paper>
        <a name={props.title}>
            <div id='section-title'>
                {props.title}
            </div>
            <div className={props.contentClass}>
                {props.title==='Projects' &&
                    info.projects.map((project)=>{
                        return(<Card info={project}/>)
                    })
                }
                {props.title==='Experience' &&
                    <Stepper info={info}/>
                }
            </div>
        </a>
    </Paper>
)