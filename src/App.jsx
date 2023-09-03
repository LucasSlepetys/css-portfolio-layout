import imgBusiness from './assets/bg_guy.svg';
import imgTalk from './assets/talk_img.svg';
import webImg from './assets/web.png';
import { FaInstagram, FaJava, FaGit } from 'react-icons/fa';

function App() {
  return (
    <div className='wrapper'>
      <div className='hero'>
        <div className='about-wrapper'>
          <p className='name'>I'm John</p>
          <p className='desc'>
            Front-end Dev <span>turning ideas to reality</span>
          </p>
          <div className='social_media-wrapper'>
            <FaInstagram className='icon' />
            <FaInstagram className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <img className='business-img' src={imgBusiness} alt='image' />
      </div>
      <div className='section_tech-stack'>
        <p className='text_tech'>Tech Stack</p>
        <div className='card-wrapper'>
          <div className='card'>
            <FaJava className='icon' />
            <p className='language'>Java</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nesciunt cum, eos facere sed dicta velit.
            </p>
          </div>
          <div className='card'>
            <FaJava className='icon' />
            <p className='language'>Java</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nesciunt cum, eos facere sed dicta velit.
            </p>
          </div>
          <div className='card'>
            <FaJava className='icon' />
            <p className='language'>Java</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nesciunt cum, eos facere sed dicta velit.
            </p>
          </div>
        </div>
      </div>
      <div className='contact_wrapper'>
        <img className='img-svg' src={imgTalk} alt='Lets talk!' />
        <div className='talk_wrapper'>
          <p className='main'>Coffee & Code</p>
          <div className='underline' />
          <p className='desc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            eum impedit voluptatem modi, at vero provident?
          </p>
        </div>
      </div>
      <div className='web_wrapper'>
        <p className='text-web'>Web Creations</p>
        <div className='card_wrapper'>
          <div className='card'>
            <img src={webImg} alt='WebSite' className='web-img' />
            <div className='info'>
              <p className='name'>Project Name</p>
              <p className='desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente provident assumenda soluta vel illum!
              </p>
              <div className='social_media-wrapper'>
                <FaJava className='icon' />
                <FaJava className='icon' />
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={webImg} alt='WebSite' className='web-img' />
            <div className='info'>
              <p className='name'>Project Name</p>
              <p className='desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente provident assumenda soluta vel illum!
              </p>
              <div className='social_media-wrapper'>
                <FaJava className='icon' />
                <FaJava className='icon' />
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={webImg} alt='WebSite' className='web-img' />
            <div className='info'>
              <p className='name'>Project Name</p>
              <p className='desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente provident assumenda soluta vel illum!
              </p>
              <div className='social_media-wrapper'>
                <FaJava className='icon' />
                <FaJava className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
