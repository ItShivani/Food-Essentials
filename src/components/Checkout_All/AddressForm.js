import React, {useState,useEffect} from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'

import {useForm,FormProvider} from 'react-hook-form'
import CustomField from './CustomTextField'
import {commerce} from '../../lib/commerce'
import {Link} from 'react-router-dom'
const AddressForm = ({checkoutToken , next }) => {
	const methods = useForm();
	const shippingCountry='India'

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => next({...data,shippingCountry}))}>
					<Grid container spacing={3}>
					
						<CustomField required name='firstName' label='First Name'/> 
						<CustomField required name='lastName' label='Last Name'/>
						<CustomField required name='email' label='Email'/>
						{/*<CustomField required name='Address' label='Address'/>*/}
						<CustomField required name='block' label="Block [A-K]"/>
						<CustomField required name="flatnumber" label="Flat Number"/>
						{/*<CustomField required name='city' label='City'/>*/}
						<Select value="Hyderabad" name='city'>
						<MenuItem value="Hyderabad">
							Hyderabad
						</MenuItem>
						</Select>
						<CustomField required name='zip' label='ZIP'/>
						<Grid item xs={12} sm={6}>
							<InputLabel> Country </InputLabel>

							<Select value="India" name='country'>
							<MenuItem value="India">
							India 
							</MenuItem>
							</Select>
						</Grid>
					</Grid>
					<br/>
          			<div style={{ display: 'flex',justifyContent: 'space-between' }}> 
            			<Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            			<Button type="submit" variant="contained" color="primary">Next</Button>
          			</div>
				</form>
			</FormProvider>
		</>
		);
};

export default AddressForm;