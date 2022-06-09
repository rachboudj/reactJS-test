import './CardProduit.css';

export default function CardProduit(produit) {
    return (
        <>
            <h1>Card Produit</h1>
        
            <figure>
                <img src={produit.image} ></img>
                <figcaption>
                    <h3>{produit.titre}</h3>
                    <p>{produit.description}</p>
                    <h4>{produit.prix}</h4>
                    <h5>{produit.avis}</h5>
                </figcaption>
            </figure>
        </>
)};