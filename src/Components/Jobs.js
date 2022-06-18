import React from 'react'
import jobsHeader from '../Images/jobsHeader.avif'
import '../Styles/jobs.css'

function Jobs() {
  return (
    <div className='jobs-body'>
    <div className='jobs'>
        <img src={jobsHeader} alt='Jobs header' />
        <p>Jobs at Ableton</p>
    </div>
    <div className='jobs-text'>
        <h1>Working at Ableton means being a part of creating products that shape the future of music culture in a dynamic and diverse environment</h1>
        <p>Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard to foster an environment in which people can grow both personally and professionally. We believe that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace and providing equal opportunity throughout our recruitment process. Because of this we ask that you do not include a picture in your application documents. Thank you very much for your understanding.<br/><br/>
           If you want to apply for one of our open positions, we would be happy to receive your application through our application form. Please upload all necessary documents there.</p>
    </div>
    <div className='jobs-commerce-links'>
        <h2>Commerce</h2>
        <ul>
            <li>
                <a href='#'>
                    <span>Ableton Brand Manager - Spain & Portugal (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton S.L.U. / Spain</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Head of Brand Design (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>IT Project Manager (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Local Brand Manager Canada (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton Inc. / Canada</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Marketing Communications Manager, Customer Engagement (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Assistenz in der Rechtsabteilung / Paralegal (d/f/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Referendar:in für die Wahlstation bzw. als Teil der Anwaltsstation (d/w/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
            <li>
                <a href='#'>
                    <span>Senior Legal Counsel (d/w/m)</span>
                    <br/>
                    <span id='second-span'>Ableton AG / Germany</span>
                </a>
            </li>
        </ul>
    </div>
    <div className='product-development'>
            <ul>
                <li>
                    <a href='#'>
                        <h3>Product Development</h3>
                        <br />
                        <span>QA Engineer, Hardware (d/f/m)</span>
                        <br/>
                        <span id='second-span'>Ableton AG / Germany</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Jobs