import React from 'react';
import "./Resume.css"
import resume from '../resume.pdf'

function Resume(props) {
    return (
        <div className='resume-content'>
            <iframe src={resume} title="resume" className='resume'/>
        </div>
    );
}

export default Resume;