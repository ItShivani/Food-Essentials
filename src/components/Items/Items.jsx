import React from 'react'
import {Grid} from '@material-ui/core'
import Item from './Item/Item'
import useStyles from './styles.js'

const items = [
{id:1, name:'Rice', description: ' Basmati Rice',price:'Rs. 100',image:'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'},
{id:2, name:'Apple', description: 'Royal gala ',price:'Rs. 100 per kg',image:'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'}
];

const Items = () => {
	const classes = useStyles();
	return(
	<main className={classes.content}> 
		<div className={classes.toolbar}/>
		<Grid container>
			{
				items.map((item)=>(
						<Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
							<Item item={item}/>
						</Grid>
					))
			}
		</Grid>
	</main>
	);
}

export default Items;