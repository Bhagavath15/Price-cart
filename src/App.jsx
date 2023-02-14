import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import './App.css'

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import KeyboardBackSpace from '@mui/icons-material/KeyboardBackSpace';

// const countCxt = createContext()

// export default function App() {
//   const [value, setValue] = useState(0)


//   return (
//     <countCxt.Provider value={[value, setValue]}>
//       <div className="App">

//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route path="/cart" element={<CartItem />} />
//           <Route path="/addcart" element={<AddItem />} />
//         </Routes>

//         {/* <Btn /> */}
//         {/* <Welcome /> */}
//       </div>
//     </countCxt.Provider>
//   )
// }

// function AddItem() {
//   const [show, setShow] = useState(true)
//   const [cart, setCart] = useState([])
//   const handleClick = (item) => {
//     let ispresent = false;
//     cart.forEach((product) => {
//       if (item.id === product.id)
//         ispresent = true
//     })
//     if (ispresent)
//       return;
//     setCart([...cart, item])
//   }
//   return (
//     <div>
//       <Navbar size={cart.length} setShow={setShow} />
//       {show ? <Content handleClick={handleClick} /> : <RemoveCart cart={cart} setCart={setCart} />}
//     </div>
//   )
// }

// function RemoveCart({ cart, setCart }) {
//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr)
//   }
//   return (
//     <article>
//       {cart?.map((item) => (
//         <div>
//           <div key={item.id}></div>
//           <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
//           <p>{item.productname}</p>
//           <div>
//             <Button disabled={false} onClick={() => handleRemove(item.id)}>Remove</Button>
//           </div>
//         </div>))}
//     </article>
//   )
// }
// function CartItem() {
//   const [value, setValue] = useContext(countCxt)
//   const navigate = useNavigate()
//   const remove = (() => {
//     if (value > 0) {
//       setValue(value - 1)
//     }

//   })

//   return (
//     <div>
//       <h1>Items in the carts are here</h1>
//       <Button onClick={remove} variant="outlined">Remove</Button>
//       <Button variant="outlined" startIcon={< KeyboardBackSpace />} onClick={() => navigate(-1)}>Back</Button>
//     </div>
//   )
// }

// function Navbar() {
//   return (
//     <div className="bar">

//       <div className="navbar">
//         <a href="#">Start Bootstrap</a>
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <div className="dropdown">
//           <button className="dropbtn">Shop
//             <i className="fa fa-caret-down"></i></button>
//           <div className="dropdown-content">
//             <a href="#">All Products</a>
//             <a href="#">Popular Items</a>
//             <a href="#">New Arrival</a>
//           </div>
//         </div>
//         <Cartbtn />
//       </div>
//       <div className="container">
//         <h1>Shop in style</h1>
//         <h4>with this shop homepage template</h4>
//       </div>
//       <Content />
//     </div>


//   )
// }


// function Content() {
//   const content = [{
//     id: "0",
//     productName: "Fancy Product",
//     cost: "$60.00"
//   },
//   {
//     id: "1",
//     productName: "Special Item",
//     cost: "$18.00",
//     rating: "⭐⭐⭐⭐⭐"
//   },
//   {
//     id: "2",
//     productName: "Sale Item",
//     cost: "$25.00"
//   },
//   {
//     id: "3",
//     productName: "Popular Item",
//     cost: "$40.00",
//     rating: "⭐⭐⭐⭐⭐"
//   }, {
//     id: "4",
//     productName: "Sale Item",
//     cost: "$25.00"
//   }, {
//     id: "5",
//     productName: "Fancy Product",
//     cost: "$120.00 - $280.00"
//   }, {
//     id: "6",
//     productName: "Special Item",
//     cost: "$18.00",
//     rating: "⭐⭐⭐⭐⭐"
//   }, {
//     id: "7",
//     productName: "Popular Item",
//     cost: "$40.00",
//     rating: "⭐⭐⭐⭐⭐"
//   }]
//   return (
//     <div className="content">
//       {content.map((cnt) => <MiniCont data={cnt} />)}
//     </div>
//   )
// }

// function MiniCont({ data }) {

//   return (
//     <div className="miniCont">
//       <img className="product" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="dummy" />
//       <div className="productContent">
//         <h3>{data.productName}</h3>
//         <label>{data.rating}</label>
//         <p>{data.cost}</p>
//         <br />
//         <Addcart />
//       </div>
//     </div>
//   )
// }

// function Cartbtn() {
//   const [value, setValue] = useContext(countCxt)
//   const navigate = useNavigate()

//   return (
//     <div className="cartbtn">
//       <Button onClick={() => navigate('/cart')} variant="outlined" > Cart {value}</Button >
//     </div >
//   )
// }

// function Addcart() {
//   const [value, setValue] = useContext(countCxt)
//   const [disable, setDisable] = useState(false)
//   const addCartFn = (() => {
//     setDisable(!disable)
//     setValue(value + 1)
//     console.log(data[i])

//   })

//   return (
//     <Button disabled={disable} variant="outlined"
//       onClick={addCartFn}> Add cart</Button >
//   )
// }


// function Btn() {
//   const [disable, setDisable] = useState(false)
//   return (
//     <button disabled={disable} onClick={() => setDisable(true)}>Add Cart</button>
//   )
// }

// function Display() {
//   return (
//     <div>

//     </div>
//   )
// }

export default function App() {

  const [show, setshow] = useState(true)

  const [cart, setcart] = useState([]);



  return (
    <div className="App">
      <Navbar size={cart.length} setshow={setshow} />
      {show ? <Content cart={cart} setcart={setcart} /> : <Cart cart={cart} setcart={setcart} />}
      {/* <Line options={options} data={data} />; */}
      {/* {show ? <Amazon handleclick={handleclick}/> : "cart"} */}
      {/* <Amazon handleclick={handleclick}/> */}
      {/* <Cart cart={cart}  setcart={setcart}/> */}
    </div>
  )
}




function Navbar({ setshow, size }) {
  return (
    <div className='bar'>
      <div className='navbar'>
        <a href="#">Start BootStrap</a>
        <div className='home'>
          <a href="#" onClick={() => setshow(true)}>Home</a>
          <a variant="contained">About</a>
          <div className="dropdown">
            <button className="dropbtn">Shop
              <i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#">All Products</a>
              <a href="#">Popular Items</a>
              <a href="#">New Arrival</a>
            </div>
          </div>
        </div>
        <div className='cartbtn'>
          <Button variant="outlined" onClick={() => setshow(false)}>cart{size}</Button>

        </div>
      </div>
      <div className="container">
        <h1>Shop in style</h1>
        <h3>with this shop homepage template</h3>
      </div>
    </div>

  );
}

function Content({ handleclick, cart, setcart }) {
  const list = [{
    id: 1,
    productname: "Fancy Product",
    cost: "$60.00"
  },
  {
    id: 2,
    productname: "Special Item",
    cost: "$18.00",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    productname: "Sale Item",
    cost: "$25.00"
  },
  {
    id: 4,
    productname: "Popular Item",
    cost: "$40.00",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 5,
    productname: "Sale Item",
    cost: "$25.00"
  },
  {
    id: 6,
    productname: "Fancy Product",
    cost: "$120.00-$280.00"
  },
  {
    id: 7,
    productname: "Special Item",
    cost: "$18.00",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 8,
    productname: "Popular Item",
    cost: "$40.00",
    rating: "⭐⭐⭐⭐⭐"
  }];
  // const[cart,setcart]=useState([]);
  // const handleclick=(item)=>{
  //   // console.log(item)
  //   cart.push(item);
  //   // console.log(cart);
  // }
  return (
    <section><div className='content'>
      {list.map((item) => <Cards key={item.id} item={item} cart={cart} setcart={setcart} />)}
    </div>
    </section>
  )
}
function Cards({ item, cart, setcart }) {
  let [disable, setDisable] = useState(false);
  const handleclick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        ispresent = true;
    })
    if (ispresent)

      return;
    setcart([...cart, item]);
    setDisable(true)

  }


  const click = () => handleclick(item)

  // if(click)
  // setDisable(true)
  // const isAnonymous = true;
  return (
    <div className="minicont">
      <div className='align'>
        <img className="img" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        {/* <img className="img" src="image.png"/> */}
        <div className="productcontent">
          <h3>{item.productname}</h3>
          <lable>{item.rating}</lable>
          <p>{item.cost}</p>
          <br />
          <div className='abut'>
            <Button variant="outlined" disabled={disable} onClick={click}>addcart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cart({ cart, setcart }) {


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);

  }
  return (
    <article className="maincontent">
      {cart?.map((item) => (<div >
        <div key={item.id}>
          <div className="minicontent">
            <img className='img' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
            {/* <img src="https://nmsonl.sse.codesandbox.io/"/> */}
            <div className="productcontent">
              <h3>{item.productname}</h3>


              {/* <div> */}
              <Button variant="outlined" onClick={() => handleRemove(item.id)}>remove</Button>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      ))}

    </article>
  )
}