import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc, putKategorii, putUslugi } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Uslugi12 = ({function1,i}) => {

    const [svg,setsvg,setsvgRef] = useState(i.svg)
    const [title,settitle,settitleRef] = useState(i.title)
    const [description,setdescription,setdescriptionRef] = useState(i.description)




    const selectFile = e => {
        setsvg(e.target.files[0])
    }

    const function6 = async() => {
  
     if(i.svg==setsvgRef.current){
        return
     }else{
        const formData = new FormData()
        formData.append('id',i.id)
        formData.append('svg',setsvgRef.current)
      const fff = await putUslugi(formData)
     }
        
      }
    return (
      

<div class='wi_d_t'>


 
<div onClick={e =>function1(e,i)}class='but w_100 but_2  ml_5'>

<img  class={`img_svg img_${i.id}`} src={process.env.REACT_APP_API_URL + i.svg}/>
{/* <svg  xmlns="http://www.w3.org/2000/svg" class='fill1' version="1.0" width="50px" height="50px" viewBox="0 0 180.000000 160.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"  stroke="none">
<path d="M367 1466 c-58 -21 -102 -60 -164 -144 -31 -42 -83 -102 -114 -132 l-58 -54 57 -62 c31 -33 88 -96 126 -138 71 -80 119 -111 215 -140 63 -19 216 -21 276 -5 69 19 135 51 135 65 0 19 -9 18 -76 -13 -55 -26 -68 -28 -189 -28 -167 0 -220 19 -310 109 -65 66 -165 181 -165 190 0 16 49 1 128 -38 48 -24 112 -51 142 -60 74 -23 238 -31 327 -17 94 14 183 48 183 68 0 10 -5 13 -17 8 -121 -46 -137 -49 -288 -49 -163 0 -225 14 -323 71 l-44 26 47 18 c25 10 52 22 58 27 8 7 30 5 67 -5 74 -21 314 -21 389 0 51 14 56 14 85 -4 17 -10 37 -19 44 -19 20 0 14 28 -8 35 -11 3 -44 26 -72 51 -67 57 -141 81 -202 65 -29 -7 -54 -7 -77 -1 -64 19 -163 -13 -214 -70 -35 -38 -96 -63 -170 -68 l-70 -5 32 27 c18 15 65 70 104 122 85 113 137 149 215 149 36 -1 63 -9 95 -27 l44 -26 44 26 c97 57 207 22 284 -88 34 -50 67 -75 67 -52 0 20 -78 118 -118 149 -76 57 -155 65 -238 22 -38 -19 -38 -19 -79 1 -56 27 -122 33 -168 16z m172 -207 c23 -8 44 -8 77 0 32 8 56 9 83 1 46 -12 96 -49 84 -61 -5 -5 -54 -14 -110 -21 -78 -9 -123 -9 -198 1 -127 15 -138 21 -91 50 63 39 105 47 155 30z"/>
<path d="M1000 1226 c0 -72 -1 -77 -24 -86 -32 -12 -46 -39 -46 -89 0 -33 -4 -41 -18 -41 -39 0 -42 -17 -42 -226 0 -184 7 -242 24 -198 3 9 6 101 6 205 l0 189 30 0 c29 0 29 1 32 63 l3 62 45 0 45 0 3 -47 c3 -47 3 -48 -27 -48 -21 0 -31 -5 -31 -15 0 -12 13 -15 60 -15 54 0 60 -2 66 -24 3 -13 4 -38 2 -57 -3 -31 -6 -34 -41 -37 -48 -4 -45 -27 4 -27 30 0 34 -3 34 -25 0 -21 -5 -26 -38 -30 -50 -7 -48 -24 3 -28 35 -3 40 -6 40 -27 0 -21 -5 -24 -40 -27 -51 -4 -53 -21 -3 -28 37 -5 38 -7 41 -48 2 -23 7 -42 13 -42 5 0 9 83 9 203 0 210 -3 227 -42 227 -15 0 -18 8 -18 48 0 48 -20 82 -48 82 -7 0 -12 28 -14 77 -2 50 -7 78 -15 81 -10 3 -13 -16 -13 -72z"/>
<path d="M797 544 c-16 -16 9 -24 74 -24 l69 0 0 -55 c0 -52 -1 -55 -26 -55 -16 0 -24 -5 -21 -12 5 -18 229 -18 235 0 2 7 -6 12 -22 12 -25 0 -26 3 -26 55 l0 54 73 3 c41 2 71 7 70 13 -3 11 -415 20 -426 9z m253 -79 l0 -55 -40 0 -40 0 0 55 0 55 40 0 40 0 0 -55z"/>
</g>
</svg> */}
<div class='ww'>
{i.name}
</div>
</div>
<input class='class0 file file_ file_1' onChange={selectFile} placeholder={'Иконка'} type="file" />
<button onClick={function6}>
    сохранить
</button>
</div>
  )
}