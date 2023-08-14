import React from 'react'


const Navbar = () => {

 const titulos = ['Home','Shop','Contact','About']

  return(

    <div>

        {titulos.map((titulo) => {

         return <h4 Key={} >{titulo}</h4>
            
      })}
    </div>
  )
 
}
export default Navbar