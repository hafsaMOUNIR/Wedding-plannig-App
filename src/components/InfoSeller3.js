import React from 'react';
import {Button} from "@material-ui/core";
import "../styles/InfoSeller.css"






function InfoSeller3() {
  


  return (
    <div className='InfoSeller'>
        <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pZfiUeuU1e6ngAGud2a4BiqYFJFwDOVGFA&usqp=CAU"/>
        <div className='info'>
            <div className='text'>
                <div className='qst'>
                {/* <h1>Avec le groupe Lahdiya, l'ambiance est garantie avec un style de musique unique !</h1> */}
                </div>
            
                <p>Le show Lahdiya s’est fait à travers l’innovation dans la fusion entre la musique du folklore d'Aâbidat Rma et d’autres rythmes modernes occidentaux.</p>
            
            </div>
            <a href='/messages'><Button>contactez-nous!</Button></a>
            

        </div>
  
           
    
    </div>
  )
}

export default InfoSeller3;

