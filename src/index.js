import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    id: 1,
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    id: 3,
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    id: 4,
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    id: 5,
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    id: 6,
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

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
            {pizzaData.map((pizza) => (
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

//Pizza component receiving props from Menu component
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  )
}

//Pizza component with map functionality inside.
// function Pizza() {
//   return (
//     <li className="pizza">
//       {pizzaData.map((data) => {
//         return (
//           <div key={data.id}>
//             <img src={data.photoName} alt={data.name} />
//             <div>
//               <h3>{data.name}</h3>
//               <p>{data.ingredients}</p>
//               <span>{data.price}</span>
//             </div>
//           </div>
//         )
//       })}
//     </li>
//   )
// }

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!")
  //   else alert("Sorry we're close")

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
    </footer>
  )
  //   return React.createElement('footer', null, "We're currently open!")
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
