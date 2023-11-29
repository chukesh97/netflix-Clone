import { VscChevronRight } from "react-icons/vsc";
import './Banner.css';


const Banner = () => {
  return (
    <div className='banner'>
        <div className='Home_screen_background'>
        <img alt="" src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
        <div className='Home_screen_body'>
        <h1>Laughter. Tears. Thrills. Find it all on <span>Netflix.</span></h1>
        <p>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
            <div className='Home_screen_input'>
                <form>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='email'>
                    <input type='email' required={true}></input>
                    <label>Email Address</label>
                    <button>GET STARTED<VscChevronRight/></button>
                </div>
                </form>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Banner;
