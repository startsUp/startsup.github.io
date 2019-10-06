import info from '../res/info'
import React, { Component } from 'react'
import Card from './card' 
import Stepper from './stepper'
export const Section = props => (
    <section className={props.title} id={props.title}>
        <div>
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
        </div>
    </section>
)