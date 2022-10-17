import React,{useState, useEffect} from 'react';
import db from "../service/firebase";
import Card from "./Card";
import "../styles/Cards.css";
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Button} from "@material-ui/core";

function Cards() {


        // function handleClick(){
        //      setClasse(!classe);

        // }
         
       
        const [cards, setCards] = useState([]);
        const [category, setCategory] = useState("");
        const [ville, setVille] = useState("");
 
  
        useEffect(() => { // f chargement dial la page kikhrej lia kolchi ... 3ad apres anbda querying 
          db.collection("Offers").onSnapshot((snapshot) =>
            setCards(snapshot.docs.map((doc) => doc.data()))
          );
        }, []);

        //  useEffect(() => {
        //   db.collection("Offers").find ({ " category": {category}, "ville": {Ville} }).onSnapshot((snapshot) =>
        //        setCards(snapshot.docs.map((doc) => doc.data()))) ; 
        // });

        // function Submit(e){
        //         e.preventDefault();
        //         setCards([]);
        //         db.collection("Offers")
        //           .find ({ category: "Photograph", ville: "Rabat" })
        //           .onSnapshot((snapshot) =>
        //                 setCards(snapshot.docs.map((doc) => doc.data()))) ; 
               
        //         setCategory("");
        //         setVille("");
                
        // }
        // e.preventDefault();
        // setCards([]);
        // db.collection("Offers")
        // .find ({ " category": {category}, "ville": {Ville} })
        // .onSnapshot((snapshot) =>
        //         setCards(snapshot.docs.map((doc) => doc.data()))) ; 
       
        // setCategory("");
        // setVille("");
        // };
        // .doc(category)
//  `Message #${channelName}`

  return (
     <div className='Cards'>


             
<div className='browszeRow'>
<div className='browze'>
<h2>Trouver une Offre</h2>
</div>
<form className='form'>
<label className="label1" for="services">Filtrer par Categorie</label>       
<select value={category} onChange={(e) => setCategory(e.target.value)}  className='services' name="services" id="service">

 <option></option>
 <option value="Traiteur">Traiteurs</option>
 <option value="Photographe">Photographes</option>
 <option value="Neggafa">Neggafas</option>
 <option value="Salle">Salles</option>
 <option value="Musicien">Musiciens</option>
 <option value="Tailleur">Tailleurs</option>
 <option value="invitation">invitations</option>
 <option value="Bijoux">Bijoux</option>
 </select>

 <label className="label2" for="services">Filtrer par Ville</label>       
 <select value={ville} onChange={(e) => setVille(e.target.value)}  className='services' name="villes" id="ville">
 <option></option>
 <option value="Casablanca">Casablanca</option>
 <option value="Rabat">Rabat</option>
 <option value="Tanger">Tanger</option>
 <option value="Marrakech">Marrakech</option>
 <option value="Fes">Fes</option>
 <option value="Agadir">Agadir</option>

 </select>
 
 {/* btn-outline-warning btn2 */}


</form>
<Button type="submit" class="btn btn2">Chercher</Button>







</div> 



   
     
     <div className='offercards'>

        <a href="/InfoSeller2">
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_9GTOjpcKnShK51QRz1azSbLLfpOaJ6i0Q&usqp=CAU.png"
                description="On vous propose une ferme de 400 ha² bordée par les montagnes de l’Atlas."
                rating="4.5"
                price="30000"
        />
        </a>
        <a href="/InfoSeller3">
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pZfiUeuU1e6ngAGud2a4BiqYFJFwDOVGFA&usqp=CAU" 
                description="Le show Lahdiya est l'incarnation parfaite du folklore traditionnel d'Aâbidat Rma."
                rating="4.7"
                price="8500"
        />
        </a>
        
       {cards.map((card) => (
                <a href="/InfoSeller">
                <Card
                key={card.id}   
                src={card.image}
                description={card.text}
                rating="5.0"
                price={card.price}
                // user={card.user}
                />
                </a>
       ))}
               
    </div>
   
    
    
    
    
    </div>

  )
}

export default Cards;



// {/* <div className='browszeRow'>
// <div className='browze'>
// <h2>Browse</h2>
// </div>
// <form className='form'>
// <label className="label1" for="services">Filter by Category</label>       
// <select value={category} onChange={(e) => setCategory(e.target.value)}  className='services' name="services" id="service">

//  <option></option>
//  <option value="Traiteur">Traiteur</option>
//  <option value="Photograph">Photograph</option>
//  <option value="Neggafa">Neggafa</option>
//  <option value="Sales">Sales</option>
//  <option value="Musicien">Musicien</option>
//  <option value="Tailleur">Tailleur</option>
//  <option value="invitations">invitations</option>
//  <option value="Bijous">Bijous</option>
//  </select>

//  <label className="label2" for="services">Filter by City</label>       
//  <select value={ville} onChange={(e) => setVille(e.target.value)}  className='services' name="villes" id="ville">
//  <option></option>
//  <option value="Casablanca">Casablanca</option>
//  <option value="Rabat">Rabat</option>
//  <option value="Tanger">Tanger</option>
//  <option value="Marrakech">Marrakech</option>
//  <option value="Fes">Fes</option>
//  <option value="Agadir">Agadir</option>

//  </select>
//  <button  type="submit" class="btn btn-danger btn2">Submit</button>


// </form>





// {/* <div className='next'>
// <p className='seeAll'>See All</p>
// <NavigateNextIcon />
// </div>      */}

// </div>  */}
