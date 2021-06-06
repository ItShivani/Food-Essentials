import React from 'react'
import {Card, CardMedia, CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';


const Item = ({item,onAddToCart}) => {
	const classes = useStyles();
	return (
			<div>
				<Card className={classes.root}>
					<CardMedia className={classes.media} image={item.media.source} title={item.name}/>
					<CardContent>
						<div className={classes.cardContent}>
							<Typography variant='h5' gutterBottom>
								{item.name}
							</Typography>
							<Typography variant='h5'>
								{item.price.formatted_with_symbol}
							</Typography>
						</div>
						<Typography dangerouslySetInnerHTML={{ __html:item.description}} variant="body2" color="textSecondary"/>
					</CardContent>
					<CardActions disableSacing className={classes.cardActions}>
						<IconButton aria-label="Add to cart" onClick={() => onAddToCart(item.id,1)}>
							<AddShoppingCart/>
						</IconButton>
					</CardActions>
				</Card>

			</div>
		)
}

export default Item