// import Header from '../Header/Header';
// import Emoji from '../Emoji/Emoji';
// import Produit from '../Produit/Produit';
// import Message from '../Message/Message';
import Contenu from '../Contenu/Contenu';
// import Footer from '../Footer/Footer';

// Le CSS général
import './App.css';

const App = () => {
  return (
    <>
      <h1>Bienvenue en Reactie</h1>
      <Contenu />
    </>
    
    )
}

export default App;

// export default function App() {

  // const entete = 'titre';
  // const titre = <h1>Un titre h1</h1>;

//   return (
//       <div className="App">
//         {/* Ceci est un commentaire en JSX */}
//       <Header />
//       <Emoji />
//       <Produit />
//       {/* <h1 className={entete}>Titre React</h1>
//       {titre} */}
//       <Message messagePasse="Yoooooo" prenom="Rachid"/>
//       <Message messagePasse="Another ooone" prenom="Mehdi"/>
//       <Message messagePasse="Let's gooo" prenom="Prenom"/>
//       <Contenu />
//       <Footer />
//       </div>
//   );
// }