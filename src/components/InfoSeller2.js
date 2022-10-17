import React from 'react';
import {Button} from "@material-ui/core";
import "../styles/InfoSeller.css"






function InfoSeller2() {
  


  return (
    <div className='InfoSeller'>
        <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_9GTOjpcKnShK51QRz1azSbLLfpOaJ6i0Q&usqp=CAU.png"/>
        <div className='info'>
            <div className='text'>
                <div className='qst'>
                {/* <h1>Vous vous mariez bientôt ? Ne cherchez plus ! La Bague d'Or est votre lieu de récéption.</h1> */}
                </div>
            
                <p>On vous propose une ferme d’hôte lotie au milieu de 400 hectares d’orangers, de palmiers et de diverses cultures maraîchères bordé par les montagnes de l’Atlas.</p>
            
            </div>
            <a href='/messages'><Button>contactez-nous!</Button></a>
            

        </div>
  
           
    
    </div>
  )
}

export default InfoSeller2;

