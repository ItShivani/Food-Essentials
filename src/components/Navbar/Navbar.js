import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/FoodEssentials_real.png'
import useStyles from './styles.js';

const Navbar = ({totalItems}) => {
	const classes = useStyles();
	return (
		<div> 
		<>

		<AppBar position="fixed" className={classes.appBar} color="inherit">
			<Toolbar>
				<Typography variant="h6" className={classes.title} color="inherit">
					<img src={logo} alt="Logo here" height="25px" className={classes.image}/>
					Food Essentials
				</Typography>
				<div className={classes.grow}/>
				<div className={classes.button}>
					<IconButton aria-label="View Cart" color="inherit">
						<Badge badgeContent={totalItems} color="secondary">
						<ShoppingCart/>
						</Badge>
					</IconButton>
				</div>
			</Toolbar>  
		</AppBar>


		</>
		</div>
	)
}

export default Navbar;