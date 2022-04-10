import "../css/button.css"
/* Estructurado
const Button = (props) => {
  return(
    <button>
      {props.texto}
    </button>
  )
} 
*/

/* Desestructurado */
const Button = ({ texto, esBotonDeClic, manejarClic }) => {
  return(
    <button className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
    onClick={ manejarClic }
    >
      {texto}
    </button>
  )
}

export default Button;