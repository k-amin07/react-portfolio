import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import '../styles/Home.css'
import Typewriter from '../components/Typewriter'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, There!<br/>Welcome to my Portfolio</h2>
            <div className='prompt'>
                <p>As a Software Engineer I thrive on solving intricate challenges while embracing perpetual learning. Lets connect @</p>
                <div>
                    <a href='https://www.linkedin.com/in/k-amin07' target="_blank" rel='noreferrer'><LinkedInIcon/></a>
                    <a href='mailto:khizaramin95@gmail.com' target="_blank" rel='noreferrer'><EmailIcon/></a>
                    <a href='https://www.github.com/k-amin07' target="_blank" rel='noreferrer'><GitHubIcon/></a>
                </div>
                <Typewriter text="Warning: Risk of getting stuck in an infinite loop! The navbar on the top points to my Resume which points back to this website. Proceed with caution!" delay={10} />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item' style={{ textAlign: 'center' }}>
                    <h2>Backend</h2>
                    <span>
                          NodeJS • GraphQl • Neo4j • PostgreSQL • Docker • ApolloServer • AWS • ElasticBeanstalk <br/>EC2 • S3 • Lambda • CloudFormation • CodePipeline • SQS • ElastiCache • Firebase
                    </span>
                </li>
                <li className='item' style={{ textAlign: 'center' }}>
                    <h2>Misc</h2>
                    <span>
                        Git • Linux • Bash • CI/CD • Data Structures • Algorithms • Selenium • Stem <br/>Machine Learning • Deep Learning
                    </span>
                </li>
                <li className='item' style={{ textAlign: 'center' }}>
                    <h2>Languages</h2>
                    <span>
                        Python • Javascript • Rust
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home