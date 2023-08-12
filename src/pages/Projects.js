import React from 'react'
import ProjectItem from '../components/ProjectItem'

import '../styles/Projects.css'
import { ProjectList } from '../helpers/projectlist'

function Projects() {
  return (
    <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((item,idx) => {
                return <ProjectItem
                    id = {idx}
                    image={item.image}
                    name={item.name}
                />
            })}
        </div>
    </div>
  )
}

export default Projects