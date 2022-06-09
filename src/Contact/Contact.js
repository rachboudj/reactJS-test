import React from "react";
import { useState } from "react";

import './Contact.css';

function Contact() {

    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");

    const validation = (event) => {
      event.preventDefault();
        alert(`Vous êtes : ${prenom} ${name} , votre email est : ${email}`)
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
          onChange={(element)=> setName(element.target.value)} />
        </label>
        <label>
          Prénom :
          <input 
          type="text" 
          value={prenom} 
          onChange={(element)=> setPrenom(element.target.value)} />
        </label>
        <label>
          Email :
          <input 
          type="text" 
          value={email} 
          onChange={(element)=> setEmail(element.target.value)} />
        </label>
          <input 
          type="submit" />
      </form>
    </div>
  );
}

export default Contact;
