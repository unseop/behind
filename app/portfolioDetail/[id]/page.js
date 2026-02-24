// 'use client';
import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database.js";
import '../../css/portfoliList.css'
import Header from "../../components/header.js"

export default async function Portfoliodetail(props) {

    const client = await connectDB;
    const db = client.db("behind")
    
    let result = await db.collection('portfolio').findOne({_id: new ObjectId(props.params.id)})
    
    // console.log(props.params);

    let changedFront = result.front.split(',');
    let changedBack = result.back.split(',');
    let changedDesign = result.design.split(',');


    return (
        <>
            <Header/>
            <div className="sec_detail">
                <div className="detail_kv">
                    <div className="kv_img01">
                        <div className="img_box">
                            <img src={'/images/portfolio/' + result._id + '.jpg'} alt={result.title + '의 웹사이트'} />
                        </div>
                    </div>
                    {/* <div className="kv_img02">
                        <div className="img_box">
                            <img src={'./../../../images/portfolio/' + result._id + '_web_all_pc.png'} alt={result.title + '의 웹사이트'} />
                        </div>
                    </div>
                    <div className="kv_img03">
                        <div className="img_box">
                            <img src={'./../../../images/portfolio/' + result._id + '_web_all_pc.png'} alt={result.title + '의 웹사이트'} />
                        </div>
                    </div> */}
                </div>
                <div className="detail_info">
                    <div className="inner_1520">
                        <p className="info_title">PROJECT OVERVIEW</p>
                        <div className="info_area">
                            <div className="area_txt">
                                <dl>
                                    <dt>클라이언트</dt>
                                    <dd>{result.Clientname}</dd>
                                </dl>
                                <dl>
                                    <dt>작업 기간</dt>
                                    <dd>{result.period}</dd>
                                </dl>
                                <dl>
                                    <dt>작업 소개</dt>
                                    <dd className="content">{result.int}</dd>
                                </dl>
                                <dl>
                                    <dt>URL</dt>
                                    <dd><a href={result.url} title={result.title + "페이지로 이동"} target="_blank">{result.url}</a></dd>
                                </dl>
                            </div>
                            <div className="area_txt area_txt--skill">
                                <p className="skill_title">SKILL</p>
                                {changedFront != '-' ? <dl>
                                    <dt>프론트엔드</dt>
                                    <dd>
                                    {
                                        changedFront.map((a, i)=> {
                                            return(
                                                <p className="list_item" key={i}>
                                                {changedFront[i]}
                                                </p>
                                            )
                                        })
                                    }
                                    </dd>
                                </dl> : null}
                                
                                {changedBack != '-' ?  <dl>
                                    <dt>백엔드</dt>
                                    <dd>
                                    {
                                        changedBack.map((a, i)=> {
                                            return(
                                                <p className="list_item" key={i}>
                                                {changedBack[i]}
                                                </p>
                                            )
                                        })
                                    }
                                    </dd>
                                </dl> : null}
                                
                                {changedDesign != '-' ? <dl>
                                    <dt>디자인</dt>
                                    <dd>
                                    {
                                        changedDesign.map((a, i)=> {
                                            return(
                                                <p className="list_item" key={i}>
                                                {changedDesign[i]}
                                                </p>
                                            )
                                        })
                                    }
                                    </dd>
                                </dl> : null}
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="detail_all">
                    <div className="inner_1520">
                        <p className="detail_title">VIEW DETAIL</p>
                        <div className="detail_area">

                     
                            <div className="img_box pc_kv_img">
                                <img src={'./../../../images/portfolio/' + result._id + '_web_all_pc.png'} alt={result.title + '의 웹사이트'} />
                            </div>
                          
                            <div className="img_box pc_img">
                                <img src={'./../../../images/portfolio/' + result._id + '_web_all_pc.png'} alt={result.title + '의 웹사이트'} />
                            </div>

                   
                            <div>
                                {
                                    result.imgMO === "O"
                                    ? <div className="img_box mo_img" >
                                        <img src={'./../../../images/portfolio/' + result._id + '_web_all_mo.png'} alt={result.title + '의 웹사이트'} />
                                        </div>
                                    :null
                                }
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}