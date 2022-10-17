import React from 'react';
import {Button} from "@material-ui/core";
import "../styles/InfoSeller.css"






function InfoSeller() {
  


  return (
    <div className='InfoSeller'>
        <img  alt="" src="https://www.mariage.com/wp-content/uploads/2015/05/salle-de-reception-pour-un-mariage.jpg"/>
        <div className='info'>
            <div className='text'>
                <div className='qst'>
                {/* <h1>Vous organisez votre fête de mariage, et vous cherchez un lieu de réception ?</h1> */}
                </div>
            
                <p>Avec une expérience de plus de 12 ans dans le domaine des mariages, on vous offre une meilleure prestation, une décoration élégante avec une bonne sonorisation.</p>
            
            </div>
            <a href='/messages'><Button>contactez-nous!</Button></a>
            

        </div>
  
           
    
    </div>
  )
}

export default InfoSeller;




       

     






