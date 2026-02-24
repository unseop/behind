
import "../css/footer.css"

export default function Footer({}) {

    // 해당 페이지 최상단으로 이동
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  
    };

    return(
        <footer>
            <div className="banner_area">
                <div className="banner_list banner_list--01">
                    <div className="list_text original">
                        <p>WELCOME</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>OUR AGENCY</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>INNOVATION</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>JOINS FORCES</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>WITH EXPERTISE</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>PROGRESS</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>COLLABORATION</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                    </div>
                    <div className="list_text clone">
                        <p>WELCOME</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>OUR AGENCY</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>INNOVATION</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>JOINS FORCES</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>WITH EXPERTISE</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>PROGRESS</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                        <p>COLLABORATION</p>
                        <img src="/images/footer_ico.svg" alt="별표모양 아이콘"></img>
                    </div>
                </div>
                <div className="banner_list banner_list--02">
                <div className="list_text original">
                        <p>WELCOME</p>
                        <p>OUR AGENCY</p>
                        <p>INNOVATION</p>
                        <p>JOINS FORCES</p>
                        <p>WITH EXPERTISE</p>
                        <p>PROGRESS</p>
                        <p>COLLABORATION</p>
                    </div>
                    <div className="list_text clone">
                        <p>WELCOME</p>
                        <p>OUR AGENCY</p>
                        <p>INNOVATION</p>
                        <p>JOINS FORCES</p>
                        <p>WITH EXPERTISE</p>
                        <p>PROGRESS</p>
                        <p>COLLABORATION</p>
                    </div>

                </div>

            </div>
            <div className="inner_1520">
                <button className="footer_up_btn" onClick={() => {goToTop()}}>
                    <img src="/images/footer_up_ico.png" alt="위쪽 화살표 표시 아이콘" />
                </button>
                <div className="contact_area">
                    <p className="contact_title">Passionate Frontend Developer. <img src="/images/footer_star_ico.svg" alt="별표모양 아이콘" /></p>
                    {/* <button className="contact_btn">Contact Us</button> */}
                </div>
                {/* <div className="company_info">
                    <div className="inf">
                        <img className="company_logo" src="/images/footer_logo.svg" alt="BHND로고"/>
                        <p className="company_email"><strong>E MAIL</strong>ghlejr316@naver.com</p>
                        <p className="company_num"><strong>TEL</strong>01044706222</p>
                    </div>
                    <div className="inf">
                        <a href="https://behind-hazel.vercel.app/" className="company_adress"><strong>ADDRESS</strong>https://behind-hazel.vercel.app/</a>
                    </div>
                </div> */}
            </div>  
        </footer>
    )
}