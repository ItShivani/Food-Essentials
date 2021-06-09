import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core'; 
import InCart from './InCart/InCart'
import useStyles from './styles'
import {Link} from 'react-router-dom'


const Cart = ({cart , updateCartQty,removeFromCart,emptyCart}) => {

	const classes = useStyles();
		const EmptyCart = () =>(
			<Typography variant="subtitle1"> Empty Cart! Start shopping Now
				<Link to="/" className={classes.link}> Shop items </Link>!
			</Typography>
		);

		const Cart = () => (
			<> 
				<Grid container spacing={3}> 
					{cart.line_items.map((item) => (
						<Grid item xs={12} sm={4} key={item.id}>
							<InCart item={item} updateCartQty={updateCartQty} removeFromCart={removeFromCart}/>
						 </Grid>
						))}
				</Grid>
				<div className={classes.cartDetails}>
					<Typography variant="h5">
						Subtotal : {cart.subtotal.formatted_with_symbol}
					</Typography>
					<div> 
					<Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={emptyCart}>
					 	Empty Cart
					</Button>
					<Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
					 	Checkout
					</Button>

					</div>
				</div>
			</>
		);
		if(!cart.line_items)
			return 'Loading.. '
		return(
		<Container>
			<div className={classes.toolbar}/> 
			<Typography className={classes.title} variant="h3" gutterBottom> Your basket </Typography>
			{ !cart.line_items.length? <EmptyCart/> : <Cart/>}
		</Container>
		)
}

export default Cart;