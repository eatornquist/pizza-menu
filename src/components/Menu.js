import { pizzaData } from '../data'
import Pizza from './Pizza'

function Menu() {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {/* Another aproach of iterating over the data list. */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.id} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working in our menu. Please come back later</p>
      )}

      {/* <Pizza
      name="Pizza Spinaci"
      ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName="pizzas/spinaci.jpg"
      price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  )
}

export default Menu
