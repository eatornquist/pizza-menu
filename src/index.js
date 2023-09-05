import React from 'react'
import ReactDOM from 'react-dom/client'

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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!")
  //   else alert("Sorry we're close")

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  )
  //   return React.createElement('footer', null, "We're currently open!")
}

function Pizza() {
  return (
    <div className="pizza">
      {pizzaData.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.photoName} alt={data.name}></img>
            <h2>{data.name}</h2>
            <p>{data.ingredients}</p>
          </div>
        )
      })}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
