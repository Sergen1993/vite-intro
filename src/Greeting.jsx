
function Greeting({name, age }) {
    console.log(name, age)
    return (
    <>
      <p>FR: Bonjour, {name ? `, ${name}` : ''}!</p>
      <p>TR: Merhaba {age}!</p>
      <p>ES: Hola {10 * 1000}!</p>
      </>
    )
  }

  export default Greeting
