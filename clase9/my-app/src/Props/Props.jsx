//comunicacion entre compoenentes

import React, {Component}from "react";
import Declarando from "./declarando";

const img1 ="https://eloutput.com/app/uploads-eloutput.com/2020/11/universo-dc-2.jpg"
const img2 = "https://as01.epimg.net/meristation/imagenes/2019/07/15/noticias/1563187625_893025_1563187685_noticia_normal.jpg"
const alt1 = "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/2TY63CF47RA7HD5OC4PP5PJLPE.jpg"
const alt2 = "https://eloutput.com/app/uploads-eloutput.com/2020/11/universo-dc-2.jpg"


export default class Props extends Component{
    render(){
    return(
        <div>
            <Declarando img={img1} alt={alt1} />
            <Declarando img={img2} alt={alt2}/>
        </div>
    )
    }
    
}


//export default class Props extends Component{
//    render(){
 //       return(
 //           <div>
 //               <Declarando img={img1} alt={alt1} />
 //               <Declarando img={img2} alt={alt2}/>
 //           </div>
 //       )
 //       }
 //       
 //   }