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

export default Pizza
