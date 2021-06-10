import React from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'

import {useForm,FormProvider} from 'react-hook-form'
import CustomField from './CustomTextField'

const AddressForm = () => {
	const methods = useForm();

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit=''>
					<Grid container spacing={3}>
						<CustomField required name='firstName' label='First Name'/> 
						<CustomField required name='lastName' label='Last Name'/>
						<CustomField required name='email' label='Email'/>
						<CustomField required name='Address' label='Address'/>
						<CustomField required name='city' label='City'/>
						<CustomField required name='zip' label='ZIP'/>
				
					</Grid>
				</form>
			</FormProvider>

		</>
		)
}

export default AddressForm;