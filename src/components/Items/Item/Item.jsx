import React from 'react'
import {Card, CardMedia, CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';


const Item = ({item}) => {
	const classes = useStyles();
	return (
			<div>
				<Card className={classes.root}>
					<CardMedia className={classes.media} image={item.image} title={item.name}/>
					<CardContent>
						<div className={classes.cardContent}>
							<Typography variant='h5' gutterBottom>
								{item.name}
							</Typography>
							<Typography variant='h5'>
								{item.price}
							</Typography>
						</div>
						<Typography variant="body2" color="textSecondary">
							{item.description}
						</Typography>
					</CardContent>
					<CardActions disableSacing className={classes.cardActions}>
						<IconButton aria-label="Add to cart">
							<AddShoppingCart/>
						</IconButton>
					</CardActions>
				</Card>

			</div>
		)
}

export default Item