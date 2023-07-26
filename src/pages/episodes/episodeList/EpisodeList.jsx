import React, { useState,useEffect } from 'react'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

const EpisodeList = ({data}) => {

  
  const individual=document.querySelectorAll(".individual");
  individual.forEach(i =>{
    i.addEventListener("click",() =>{
      console.log("bii")
      document.querySelector(".active")?.classList.remove("active");
      i.classList.add("active");
    })
  })

  const btn=document.querySelectorAll(".btn");
  btn.forEach(ik => {
  ik.addEventListener("click",() =>{
    document.querySelector(".btnact")?.classList.remove("btnact");
    ik.classList.add("btnact");
  })
  })
  // document.querySelector(".sub")?.classList.add("btnact")


  const[name,setname]=useState("")
  const[ep,setep]=useState()
  let b="";
  const f = (str,p,no,i)=>{
    // if(document.querySelector(".active")){

    //   document.querySelectorAll(".individual").classList.remove("active")
    // }
    document.querySelectorAll(".individual")[i].classList.add("active")
    setep(no)
  if(p=="sub"){

    b=`https://animeflix.live/watch/${str}/`;
    setname(b)
    console.log(b)
  }
  else if(p=="dub"){
    str=str.slice(0,str.indexOf("-episode"))+"-dub"+str.slice(str.indexOf("-episode"),str.length);
    b=`https://animeflix.live/watch/${str}/`;
    setname(b)
    setlang("dub")
    
    console.log(b)
  }
    //  setname(b)
  }
  const[lang,setlang]=useState("sub")
  const[la,setlan]=useState("sub")
  let l="sub";


  const lan=(v)=>{

    // btn.forEach(ik => {
    //   const btn=document.querySelectorAll(".btn");
    //   // document.querySelector(".btnact").classList.remove("btnact");
    //   ik.classList.add("btnact");
    // })
    

    if(v=="sub"){
      l="sub";
      // document.querySelector(".sub").classList.add("btnact");
      // document.querySelector(".dub").classList.remove("btnact");
    }
    else if(v=="dub"){
      l="dub";
      setlan("dub")
      // document.querySelector(".dub").classList.add("btnact");
      // document.querySelector(".sub").classList.remove("btnact");
    }
  }

  useEffect(()=>{
    try{
      function tr(){
        return document.fullscreenElement
            || document.webkitFullscreenElement
      }
  
      let fs=document.getElementById('fs');
      fs.addEventListener('click',()=>{
        if(tr()){
          document.exitFullscreen()
        }
        else{
  
          document.getElementById("scr").requestFullscreen().catch(console.log)
        }
      })
    }
      catch(err){}
  })

  return (
    <div className="episodeList">
    <div className='title'>{data?.type} * {data?.title["english"]?data?.title["english"]:data?.title["romaji"]}</div>
      <div className="backdrop-img">
            <Img src={data.cover} />
      </div>
      <div className="opacity-layer"></div>
  <div className='flex'>

        <div className='episodeno'>
        {/* <div className='scrolfor'> */}
<div className='eplength'>Episodes : {data?.episodes.length}</div>
            {data?.episodes?(
                data.episodes.map((item,i)=>{
                    return(
                        <>
<div className='individual' key={i} onClick={()=>{f(item.id,la,item.number,i)}}>
<div className='im'>

<img src={item.image} className="imgeep"/>
</div>
<div className='titleep'>

    <span className='epno'>{item.number}&nbsp;</span>
    <span className='eptitle'>: {item.title?item.title:item.description}</span>
</div>
</div>

                        </>

                    );
                })
            ):(
<div></div>
            )}
           
        {/* </div> */}
        </div>
        <div className='strlan'>

        <div className='streamdis' id='scr'>
        {name===""?(
          <div className='fake'>Tap to watch...</div>
        ):(<>
          <div className='hideback'></div>
          <div className='togglefs' id='fs'></div>
          <iframe className='stream'  src={name} title="" referrerpolicy="no-referrer-when-downgrade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </>
)}
        </div>
        <div className='ep'>Current Episode : {ep} ({lang})</div>
        <div className='lang'>
<span className='btn sub' onClick={()=>{lan("sub")}}>SUB</span>
<span className='btn dub' onClick={()=>{lan("dub")}}>DUB</span>
        </div>
        </div>
  </div>
    </div>
  )
}

export default EpisodeList
