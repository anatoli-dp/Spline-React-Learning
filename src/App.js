import Spline from '@splinetool/react-spline'

import './App.css'

//splinecode url: https://prod.spline.design/7HnC61CV-cVmMtSd/scene.splinecode
import splineScene from './assets/scene.splinecode'

import logo from './assets/logo.svg'
import iconTwitter from './assets/icon-twitter.svg'
import iconYoutube from './assets/icon-youtube.svg'
import iconLaptop from './assets/icon-laptop.svg'

function App() {
  return (
    <div className="wrapper">
      <Spline className="spline" scene={splineScene} />
      <div className="content">
        <ul className='menu'>
          <li><img src={logo} alt="Logo" /></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Login</a></li>
          <li><button>Get Started</button></li>
        </ul>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        <button>
          <img src={iconLaptop} alt="Download" />
          Download for Windows
        </button>
      </div>
      <div className='social'>
        <div />
        <img src={iconTwitter} alt="Twitter" />
        <img src={iconYoutube} alt="Youtube" />
      </div>
    </div>
  )
}

export default App
