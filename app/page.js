'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'
import Header from "./components/header"
import Footer from "./components/footer"
import Floating from "./components/floating"
import Introduce from "./components/Introduce.js"
import "./css/main.css";
import './globals.css';

gsap.registerPlugin(ScrollTrigger);

function prepareText() {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach(element => {
        // 모든 자식 노드를 순회하면서 텍스트 노드만 <span>으로 감싸기
        const childNodes = Array.from(element.childNodes);

        element.innerHTML = ''; // 기존 내용을 초기화합니다.

        childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                // 텍스트 노드일 경우 각 문자별로 <span>으로 감싸기
                const letters = node.textContent.split('');
                letters.forEach(letter => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(100%)';
                    span.style.display = 'inline-block';
                    span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    element.appendChild(span);
                });
            } else {
                // 텍스트 노드가 아닌 경우 (img 등)은 그대로 추가
                element.appendChild(node);
            }
        });
    });
}

function animateText() {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach((element) => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        const spanElements = element.querySelectorAll('span');
        spanElements.forEach((span, i) => {
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, i * 100);
        });
    });
}

export default function Home() {
    useEffect(() => {
        prepareText();
        animateText();

        gsap.to(".text_icon", {
            rotation: 360,
            duration: 5,
            repeat: -1, // 무한 반복
            ease: "linear"
        });

        gsap.set(".img_box", { y: 0 });

        gsap.to(".visual01", {
            y: 69,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual02", {
            y: 283,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual03", {
            y: 69,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual04", {
            y: 0,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    }, []);
    const scrollRef = useRef();

    const pathName = usePathname()
    const router = useRouter()
    
    // 메인 이동 + 문의하기 섹션 앵커

    function scrollEvtHandler() {
      if(pathName == '/'){
          scrollRef.current.scrollIntoView({behavior: "smooth"})
      } else {
          router.push('/')
          scrollRef.current.scrollIntoView({behavior: "smooth"})
      }
    }
    
    return (
        <>  
            <Header/>
            <section className="sec_kv">
                <div className="kv_container inner_1520">
                    <div className="text_box animate_box">
                        <p className="animated-text text_margin">[BRINGING</p>
                        <p className="animated-text">VISIONARY</p>
                        <p className="animated-text light_text">To Reality<img src="http://behind.rf.gd/text_icon.png" alt="별표모양 아이콘" className="text_icon" /></p>
                        <p className="animated-text description_text text_padding">YOUR IDEAS]</p>
                    </div>
                    <div className="visual_wrap">
                        <div className="visual_box">
                            <div className="img_box visual01">
                                <Image 
                                    src={`https://behind.rf.gd/visual01.png`}
                                    alt="스크롤 이미지1"
                                    fill
                                />
                            </div>
                            <div className="img_box visual02">
                                <Image 
                                    src={`https://behind.rf.gd/visual02.png`}
                                    alt="스크롤 이미지2"
                                    fill
                                />
                            </div>
                            <div className="img_box visual03">
                                <Image 
                                    src={`https://behind.rf.gd/visual03.png`}
                                    alt="스크롤 이미지3"
                                    fill
                                />
                            </div>
                            <div className="img_box visual04">
                                <Image 
                                    src={`https://behind.rf.gd/visual04.png`}
                                    alt="스크롤 이미지4"
                                    fill
                                />
                            </div>

                        </div>
                    </div>
                    <div className="text_box">
                        <p className="subtitle"><span>[</span>WELCOME TO OUR <br /><em>AGENCY</em> <strong>THE INNOVATTION<span>]</span></strong></p>
                    </div>
                </div>
            </section>
            <section className="secIntro">
                <Introduce />
            </section>      
            
            <Floating/>

            {/* <div className="sec_ask" ref={(el) => (scrollRef.current = el)}>
                <div className="inner_1260">
                    <h4 className="ask_tit">START A PROJECT 🎉</h4>
                    <form action="/api/post/new" method="POST">
                        <ul className="ask_list">
                            <li className="ask_item">
                                <label className="item_tit" for="compayName">회사명 <em className="fc_blue">*</em></label>
                                <input type="text" placeholder="BEHIND" id="companyName" name="company" required/>
                            </li>
                            <li className="ask_item">
                                <label className="item_tit" for="managerName">담당자명 <em className="fc_blue">*</em></label>
                                <input type="text" placeholder="홍길동" id="managerName" name="name" required/>
                            </li>
                            <li className="ask_item">
                                <label className="item_tit" for="managerEmail">이메일 <em className="fc_blue">*</em></label>
                                <input type="email" placeholder="admin@behind.co.kr" id="managerEmail" name="email" required/>
                            </li>
                            <li className="ask_item">
                                <label className="item_tit" for="managerPhone">연락처 <em className="fc_blue">*</em></label>
                                <input type="tel" placeholder="010-1234-5678" id="managerPhone" name="phone" required/>
                            </li>
                            <li className="ask_item">
                                <span className="item_tit">예산 <em className="fc_blue">*</em></span>
                                <div className="select_box">
                                    <select id="budget" className="select" name="price">
                                        <option disabled selected>예산을 선택해주세요.</option>
                                        <option value="500만원 이하">500만원 이하</option>
                                        <option value="400만원 이하">400만원 이하</option>
                                        <option value="300만원 이하">300만원 이하</option>
                                        <option value="200만원 이하">200만원 이하</option>
                                        <option value="100만원 이하">100만원 이하</option>
                                    </select>
                                </div>
                            </li>
                            <li className="ask_item">
                                <span className="item_tit">서비스 종류 <em className="fc_blue">*</em></span>
                                <div className="select_box">
                                    <select id="budget" className="select" name="service">
                                        <option disabled selected>서비스 종류를 선택해주세요.</option>
                                        <option value="웹사이트">웹사이트</option>
                                        <option value="웹디자인">웹디자인</option>
                                        <option value="영상편집">영상편집</option>
                                    </select>
                                </div>
                            </li>
                        </ul>

                        <div className="ask_textarea">
                            <span className="item_tit">문의내용</span>
                            <textarea type="text" placeholder="내용을 입력하세요" className="ask_cont" id="askCont" name="content"></textarea>
                        </div>

                        
                        <button className="btn_submit">SUBMIT</button>
                    </form>
                </div>
            </div> */}
            <Footer/>
        </>
    );
}
