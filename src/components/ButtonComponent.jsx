/**
 * Creo un nuovo componente come funzione, lo chiama ButtonComponent: dovrebbe ritornare un tag ‘button’. 
 * Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai 
 * tag <button></button>.
 */

// const ButtonComponent = (Props) => {
//   return(
//     <button>Test</button>
//   );
// };

const ButtonComponent = (props) => (
  <button>{props.text}</button>
);

export default ButtonComponent;