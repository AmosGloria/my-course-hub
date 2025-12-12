import './pageHeader.css';
import English from '../../assets/Logos/english.svg';
import Facebook from '../../assets/Logos/facebook.svg';
import Twitter from '../../assets/Logos/twitter.svg';
import Skype from '../../assets/Logos/skype.svg';
import LinkedIn from '../../assets/Logos/LinkedIn.svg';

export default function PageHearder() {
  return (
    <header className='page-header'>
      <div className='page-header__socials'>
        <div className='page-header__language-selector'>
          <img src={English} alt='english'/>
            <select className='page-header__select'>
              <option>English</option>
            </select>
        </div>
           <div>
              <hr className="vertical-line" />
           </div>
          <div className='page-header__socials__icons'>
            <img src={Facebook} alt="facebook"/>
            <img src={Twitter} alt='twitter'/>
            <img src={Skype} alt="skype"/>
            <img src={LinkedIn} alt="linkedIn"/>
          </div>
             <div>
              <hr className="vertical-line2" />
             </div>
      </div>
    </header>
  )
}
