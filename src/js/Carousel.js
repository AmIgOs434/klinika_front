import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc } from "../https/deviceAPI";
import { useEffect } from "react";

export const Gallery = ({text,items1}) => {

    const items = []
  
    const responsive = {
        0: { items: 1 },
        768: { items: 1 },
        1197: { items: 1 },
      };
    //   const get = async() => {
    //   const Komplexpred = await getKomplexpredlinfodesc()
    //   Komplexpred.map(e=>
    //     items.push(
    //       <div class='carousel_'>
    //         <div class='carousel_cont'>
    //           <div class='carousel_width'>
    //           <img class='carousel_img' src={e.img} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
    //           </div>
    //           <div class='carousel_width color_2'>
    //            <div class='carousel_title'>
    //          <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   {e.name}
    //            </div>
    //            <div class='carousel_text color_2'>
    //            <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
    //            </div>
    //            <div class='carousel_text color_2'>
    //            <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
    //            </div>
    //            <div  class='carousel_buttom bgcolor_new color_bg'>
    //             Записаться 
    //            </div>
    //           </div>
    //         </div>
    //         </div>
        
    //     )
    //   )

    // console.log(items)
    // }
    // useEffect(() => {
    //   get()
    // })

      return (
        <div className="grid grid-cols-3 ">
          <div className="col-span-2">  
            {text}
          </div>
          <div className="col-span-3 px-10">
            <AliceCarousel
              // disableButtonsControls  // ---> also remove this
              // activeIndex={activeIndex}  // ---> no need to this anymore
              items={items1}
              responsive={responsive}
              controlsStrategy="responsive"
              mouseTracking={false}
              infinite={true}
              keyboardNavigation={true}
              renderPrevButton={() => {
                return <p className="p-4 left_ absolute left-0 top-0"><svg viewBox="0 0 24 24" fill="none" class='svg_v'  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" ></path> </g></svg></p>
              }}dashed
              renderNextButton={() => {
                return <p className="p-4 right_ absolute right-0 top-0"><svg viewBox="0 0 24 24" fill="none" class='svg_v' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" ></path> </g></svg></p>
              }}
            />
          </div>
        </div>
        )
    
   
  }
