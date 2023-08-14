const FuncComponent = (props) => {
   console.log(props)
   return(<>
    <h1> Hola{props.nombre}</h1> 
    <p>props.descripcion</p>
   </>
        
   )

}
export default FuncComponent