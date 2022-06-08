import './Message.css';

export default function Message(props) {
    return (
    <div className="message">
        <h2>Ceci est un message.</h2>
        <h3>Bienvenue {props.prenom}</h3>
        <p>{props.messagePasse}</p>
    </div>
        )
};