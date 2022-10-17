import React, {useState} from 'react';
import db from "../service/firebase";
import "../styles/Offer.css";
import {Button} from "@material-ui/core";




function Offer() {
  
  const [category, setCategory] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  
  
  const Publish = (e) => {
    e.preventDefault();

    db.collection("Offers").add({
      category: category,
      ville: ville,
      text: description,
      image: image,
      price:price
    });

    setCategory("");
    setVille("");
    setImage("");
    setDescription("");
    setPrice("");
    alert("Offer published successfully !");
  };
   
   
  return (
    <div className='Offer'>
      
     <form className='offerForm'>
        <label className="label" for="services">Choisir une catégorie</label>
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
              <label className="label" for="villes">Choisir une ville</label>       
              <select value={ville} onChange={(e) => setVille(e.target.value)}  className='villes' name="villes" id="ville">
              <option></option>
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Tanger">Tanger</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Fes">Fes</option>
              <option value="Agadir">Agadir</option>

              </select>
        <div className="element media">
            <h4>Ajouter une image </h4>
            <input
             value={image}
             onChange={(e) => setImage(e.target.value)}  
             className='inputI' type="text" size="37.8" ></input>
        </div>
        <div className="element descriptionOffer">
            <h4>Ajouter une description</h4>
            <textarea
             value={description}
             onChange={(e) => setDescription(e.target.value)} 
             className='inputD' maxlength="78" rows = "3" cols = "40" name = "description">
            
            </textarea>
        </div>
        <div className="element price">
            <h4>Prix de l'offre</h4>
            <input
             value={price}
             onChange={(e) => setPrice(e.target.value)}
             className='inputP' type="number" ></input>
        </div>
        <Button onClick={Publish} type="submit" class="btn">Publier</Button>
      </form>
      <div className='welcomeOffer'>
      <p>The key to your success on <span className='alfmbrk'><span className='Alf'>Alf</span>M'brouk</span> is the brand you build for yourself through your <span className='alfmbrk'><span className='Alf'>Alf</span>M'brouk</span> reputation.</p>
      </div>    
    </div>
  )
}

export default Offer