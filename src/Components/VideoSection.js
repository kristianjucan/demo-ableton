import React from 'react'
import '../Styles/VideoSection.css'

function VideoSection() {
  return (
    <div className='video-section'>
        <div className='text-content'>
            <h2>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
            <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
        </div>
        <iframe src='https://www.youtube-nocookie.com/embed/9SbnhgjeyXA?wmode=transparent&controls=1&vq=hd1080&rel=0&showinfo=0&autohide=1&color=white&modestbranding=1&enablejsapi=1&autoplay=1'></iframe>
    </div>
  )
}

export default VideoSection