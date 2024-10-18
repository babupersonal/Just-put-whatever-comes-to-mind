import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function SlideContent({ children }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {children}
        </div>
    );
}

function Item2() {
    return (
        <div className='container'>
            <div className='slogan b c'>
                <p>slogan!!!!!</p>
            </div>
            <div className='block2 c'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper c"
                >
                    <SwiperSlide>
                        <SlideContent>
                            <img src={`${process.env.PUBLIC_URL}/img/2.jpg`}></img>
                        </SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent>
                            <img src={`${process.env.PUBLIC_URL}/img/3.jpg`}></img>
                        </SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent>
                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`}></img>
                        </SlideContent>
                    </SwiperSlide>
                    
                </Swiper>
                <div className='exp b cd'>
                    <h3 className='title'>icon 經歷、背景</h3>
                    {/* <p className='content'>嗨，我是黃楷烜，從高中一年級接觸網頁設計直到現在，過程中有參加技藝競賽，也製作過高中畢業成果展的網站，目前在大學也兼職校內工讀生，工讀期間也發現自己不擅於在群中與人互動，但也發現自己在分享事情及教別人時蠻有熱忱。而暑期也透過實驗室的資源到企業實習，在期間也參與了許多前端的製作，實習的過程中學到更多的是記錄自己當天學到的知識，以及解決問題的經驗，但也發現自己在發現問題及描述解決問題上略有欠缺。我也發現我對網頁設計還是很有興趣，所以想尋找實習的機會，以增進自身的能力以及累積工作經驗，擴展眼界。</p> */}
                    <div className='date'>September 18 . 2024</div>
                </div>
            </div>
            <div className='block3 c'>
                <div className='work b cd'>
                    <h3>工作經驗</h3>
                    <ul>
                        <li>高科技優成果展技術執行<br></br>創新創業教育中心 | 2022年11月- 2023年5月<br></br>評分網站設計<br></br>資料蒐集接待評審</li>
                        <li>高科技職教育推廣<br></br>LINE小編&活動人員創新創業教育中心 | 2023年7月- 迄今<br></br>網頁推廣抽獎活動舉辦<br></br>每月EDM發布<br></br>技職推廣教育活動<br></br>VR遊戲操作教學<br></br>文書處理</li>
                        <li>易碩科技有限公司暑期實習生<br></br>後台系統新增功能<br></br>後台網站套件製作<br></br>前端版面排版</li>
                        <li>地方特色AR遊戲功能製作<br></br>人機互動與智慧科技實驗室 | 2023年7月-迄今<br></br>任務列表功能<br></br>任務電話撥通與地址連結功能製作<br></br>ios環境架設</li>
                    </ul>
                </div>
                <div className='more'>
                    <div className='qrcode b c cd'>
                        <img src={`${process.env.PUBLIC_URL}/img/qrcode.jpeg`}></img>
                    </div>
                    <div className='contact b cd'>
                        <h3>聯絡方式</h3>
                        <span>asdfgh535060@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item2;
