import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import StarIcon from '@material-ui/icons/Star'

import { timeline } from '../helpers/timeline'

function Experience() {
  
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            {timeline.map((item) => {
              return <VerticalTimelineElement
                className={item.className}
                date={item.date}
                iconStyle={{ background: '#3e497a', color: '#fff' }}
                icon={item.icon}
              >
                <a style={{textDecoration:"none", color:"black"}} href={item.url} target="_blank" rel='noreferrer'>
                <h3 className={item.className}>{item.title}</h3>
                <h4 className={item.className}>{item.subtitle}</h4>
                <p>{item.description}</p>
                </a>
              </VerticalTimelineElement>
              
            })}
            <VerticalTimelineElement 
              className='vertical-timeline-element--no-children'
              iconStyle={{ background: '#3e497a', color: '#fff' }}
              icon={<StarIcon />}
            />
        </VerticalTimeline>
    </div>
  )
}

export default Experience;