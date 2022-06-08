import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contenu from '../Contenu/Contenu';
import Produit from '../Produit/Produit';
import Message from '../Message/Message';
import './App.css';

export default function App() {

  // const entete = 'titre';
  // const titre = <h1>Un titre h1</h1>;

  return (
      <div className="App">
        {/* Ceci est un commentaire en JSX */}
      <Header />
      <Emoji />
      <Produit />
      {/* <h1 className={entete}>Titre React</h1>
      {titre} */}
      <Message messagePasse="Yoooooo" prenom="Rachid"/>
      <Message messagePasse="Another ooone" prenom="Mehdi"/>
      <Message messagePasse="Let's gooo" prenom="Prenom"/>
      <Contenu />
      <Footer />
      </div>
  );
}

// image, titre, description, id, prix, avis