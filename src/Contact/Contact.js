import React from "react";
import { useState } from "react";

import './Contact.css';

function Contact() {

    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextera] = useState("Saisissez votre message.")
    const [jour, setJour] = useState("");

    const handleMessage = (event) => {
      setTextarea(event.target.value);
  }

  const handleJour = (event) => {
      setJour(event.target.value);
    }

    const validation = (event) => {
      event.preventDefault();
        alert(`Vous êtes : ${prenom} ${name}, votre email est : ${email}, votre message est : ${textarea}. Rendez-vous ${jour} !`)
      };

    console.log("name :", name);
    console.log("prenom :", prenom);
    console.log("email :", email);

  return (
    <div className="contact">
      <h2>C'est la page contact</h2>
      <form onSubmit={validation}>
        <label>
          Nom :
          <input 
          type="text" 
          value={name} 
          onChange={(element)=> setName(element.target.value)} required />
        </label>
        <label>
          Prénom :
          <input 
          type="text" 
          value={prenom} 
          onChange={(element)=> setPrenom(element.target.value)} required/>
        </label>
        <label>
          Email :
          <input 
          type="text" 
          value={email} 
          onChange={(element)=> setEmail(element.target.value)} required/>
        </label>
        <label>
        <select value={jour} onChange={handleJour}>
          <option>Lundi</option>
          <option>Mardi</option>
          <option>Mercredi</option>
          <option>Jeudi</option>
          <option>Vendredi</option>
          <option>Samedi</option>
          <option>Dimanche</option>
        </select>
        </label>
        <textarea value={textarea} onChange={handleMessage} />
          <input 
          type="submit" />
      </form>
    </div>
  );
}

export default Contact;
