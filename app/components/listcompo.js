'use client';

import { lazy, useEffect, useState } from "react";
import Link from "next/link.js";
import Image from 'next/image'

export default function List(props) {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(props.AllResult);
    }, [])
    
    const getDAta = (e) => {
        if(e.target.value == 'all') {
            setData(props.AllResult)
        }
        if(e.target.value == 'dp') {
            setData(props.DepubleResult)
        }
        if(e.target.value == 'pb') {
            setData(props.PubleResult)
        }
        if(e.target.value == 'tem') {
            setData(props.TemResult)
        }
    }

    return(
        <>
            <div className="sec_portfolio">
                <div className="inner_1520">
                    <div className="title_box">
                        <p className="title">OUR PROJECT</p>
                        <div className="typing">
                            <p className="typing_txt">PROGRESS</p>
                            {/* <p className="typing_dot">.</p> */}
                        </div>
                    </div>

                    <div className="tab_box">
                        <div>
                            <input type="radio" name="tab" value={'all'} id="all" defaultChecked onChange={(e) => getDAta(e)}/>
                            <label htmlFor="all" className="tab_txt">All</label>
                        </div>
                        
                        <div>
                            <input type="radio" name="tab" value={'dp'} id="dp" onChange={(e) => getDAta(e)}/>
                            <label htmlFor="dp" className="tab_txt">Design&publishing</label>
                        </div>
                        
                        <div>
                            <input type="radio" name="tab" value={'pb'} id="pb" onChange={(e) => getDAta(e)}/>
                            <label htmlFor="pb" className="tab_txt">Publishing</label>
                        </div>

                        <div>
                            <input type="radio" name="tab" value={'tem'} id="tem" onChange={(e) => getDAta(e)}/>
                            <label htmlFor="tem" className="tab_txt">Template</label>
                        </div>
                    </div>
                    
                    <div className="contents_box">
                        {
                            data && data.map((a, i)=> {
                                return(
                                    <div className="list_item" key={i}>
                                        <Link href={"/portfolioDetail/" + data[i]._id}>
                                            <div className="img_box">
                                                <Image 
                                                    src={`/images/portfolio/${data[i]._id}.jpg`}
                                                    alt={`${data[i].title}의 썸네일`}
                                                    fill
                                                />
                                            </div>
                                        </Link>
                                        <h4 className="list_item--title">{data[i].title}</h4>
                                        <p className="list_item--desc">{data[i].int}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}