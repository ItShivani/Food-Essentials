import React,{useState,useEffect} from 'react'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout_All/Checkout'
import {commerce} from './lib/commerce.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App = () => {
	const [items,setItems] = useState([]);
	const [cart,setCart] = useState({});
	const [order,setOrder] = useState({});
	const [errorMessage,setErrorMessage] = useState('');

	const fetchItems = async()=>{
		const {data} = await commerce.products.list();

		setItems(data);
	}

	const getCartItems = async () => {
		const cart = await commerce.cart.retrieve();
		setCart(cart);
	}

	const AddToCart = async (productId,quantity) => {
		const {cart} = await commerce.cart.add(productId,quantity);
		setCart(cart);
	}

	const updateCartQty = async (productId,quantity) => {
		const {cart} = await commerce.cart.update(productId,{quantity});
		setCart(cart)

	}

	const removeFromCart = async (productId) => {
		const {cart} = await commerce.cart.remove(productId);
		setCart(cart)
	}

	const emptyCart = async () => {
		const {cart} = await commerce.cart.empty();
		setCart(cart)
	}
	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	}
	const OnCaptureCheckout = async (checkTokenId,newOrder) => {
		try{
			const incomingOrder = await commerce.checkout.capture(checkTokenId,newOrder)
			setOrder(incomingOrder)
			refreshCart();
		}
		catch(error){
			setErrorMessage(error.data.error.message)
		}
	}

	useEffect(()=>{
		fetchItems();
		getCartItems();
	},[]);

	console.log(cart);

	return (
		<Router>
		<div> 
			<Navbar totalItems={cart.total_items}/>
			<Switch>
				<Route exact path="/">
					<Items items={items} onAddToCart={AddToCart}/>
				</Route>
				<Route exact path="/cart">
					<Cart cart={cart} 
					updateCartQty = {updateCartQty}
					removeFromCart = {removeFromCart}
					emptyCart = {emptyCart} 
					/>
				</Route>
				<Route exact path="/checkout"> 
					<Checkout cart={cart} 
					order={order}
					OnCaptureCheckout={OnCaptureCheckout}
					error={errorMessage}
					/>

				</Route>
			</Switch>
		</div>
		</Router>
		)
}

export default App;