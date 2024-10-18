import React, { useState, useRef, useEffect } from 'react';
import './App.scss';

function App() {
  const [position, setPosition] = useState(0);
  const [dropActive, setDropActive] = useState(false);
  const [bgColor, setBgColor] = useState('#0f0f0f');
  const rangeRef = useRef(null);

  useEffect(() => {
    document.body.style.transition = 'background-color .5s, color .5s';
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = bgColor === '#fff' ? '#0f0f0f' : '#fff';
  }, [bgColor]);

  const moveButton = () => {
    const containerWidth = rangeRef.current.offsetWidth;
    const buttonWidth = 60;
    const maxPosition = containerWidth - buttonWidth;

    if (position < maxPosition) {
      setPosition(maxPosition);
    } else {
      setPosition(0);
    }

    setDropActive(true);
  };

  const handleAnimationEnd = () => {
    setTimeout(() => {
      const newColor = bgColor === '#0f0f0f' ? '#fff' : '#0f0f0f';
      setBgColor(newColor);
      setDropActive(false);
    }, 800); 
  };
  
  return (
    <div className="container c">
      <div className='left-block c'>
        <div className='b c card1'>
          <div className='circle'>
            <img src={`${process.env.PUBLIC_URL}/img/5.jpg`} alt="example" />
          </div>
          <div className='title'>
            <h1>KAIXUAN HUANG</h1>
            <h3>黃楷烜</h3>
          </div>
        </div>
        <div className='card2 c'>
          <div className='b cd cd2' style={{ marginRight: '.5rem' }}>
            <h2>個人特質</h2>
            <p>
              優秀的時間管理能力<br></br>
              快速的學習能力<br></br>
              具有責任心
            </p>
          </div>
          <div className='b cd cd2' style={{ marginLeft: '.5rem' }}>
            <h2>Skill</h2>
            <p>
              HTML、CSS、Javascript<br></br>
              React<br></br>
              Unity<br></br>
              Ios development<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className='right-block c'>
        <div className='card4' style={{ marginRight: '1rem' }}>
          <div className='b c cd cd4' style={{ marginBottom: '1rem' }}>
            <div className='img'>
              <a href='https://www.instagram.com/d93.____.vm03_/'><img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Instagram"></img></a>
            </div>
          </div>
          <div className='b cd cd4'>
            <h3>獲獎經歷</h3>
            <ul>
              <li>商業類學生技藝競賽第11名<br></br>(教育部國民及學前教育屬，2021年12月)</li>
              <li>大專院校資訊應用服務創新競賽 教育開放資料組 佳作<br></br>(2023年28屆)</li>
            </ul>
          </div>
        </div>
        <div className='b cd card3'>
          <div className='change_range' ref={rangeRef}>
            <div
              className='circle_btn'
              onClick={moveButton}
              style={{
                left: `${position}px`,
                position: 'relative',
                transition: 'left 0.5s ease'
              }}
            ></div>
            {dropActive && (
              <div className="water-drop-container">
                <div className="water-drop" onAnimationEnd={handleAnimationEnd}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
