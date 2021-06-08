import React,{useState,useEffect} from 'react'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import {commerce} from './lib/commerce.js'

const App = () => {
	const [items,setItems] = useState([]);
	const [cart,setCart] = useState({});

	const fetchItems = async()=>{
		const {data} = await commerce.products.list();

		setItems(data);
	}

	const getCartItems = async () => {
		const cart = await commerce.cart.retrieve();
		setCart(cart);
	}

	const AddToCart = async (productId,quantity) => {
		const item = await commerce.cart.add(productId,quantity);
		setCart(item.cart);
	}
	useEffect(()=>{
		fetchItems();
		getCartItems();
	},[]);

	console.log(cart);

	return (
		<div> 
			<Navbar totalItems={cart.total_items}/>
			{/*<Items items={items} onAddToCart={AddToCart}/>*/}
			<Cart cart={cart} />
		</div>

		)
}

export default App;