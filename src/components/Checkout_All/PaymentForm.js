import React from 'react'
import { Typography,Button,Divider} from '@material-ui/core'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Review from './Review'

const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


const PaymentForm = ({checkoutToken,backStep,OnCaptureCheckout,nextStep,shippingData,timeout}) => {
	const Submit = async (event,elements,stripe) => {
		event.preventDefault();

/*		if(!stripe || !elements)
				return ;

		const cardElement = elements.getElements(CardElement);
		const {error,paymentMethod} = await stripe.createPaymentMethod({type:'card',card:cardElement});
		if(error){
			console.log(error)
		}
		else {
*/		//	const manualOptions = checkout.gateways.manual;

			// Each option has an ID, a name, and details.
			//manualOptions.each((option) => console.log(option.id, option.name, option.details));
			const orderData = {
				line_items: checkoutToken.live.line_items,
			  customer: {
			    firstname: shippingData.firstName,
			    lastname: shippingData.lastName,
			    email: shippingData.email
			  },
			  shipping: {
			    name: 'Domestic',
			    street: shippingData.block,
			    town_city: shippingData.city,
			    county_state: 'IN-TG',
			    postal_zip_code: shippingData.zip,
			    country: 'IN'
			  },
			  fulfillment: {
			    shipping_method: 'ship_7RyWOwmK5nEa2V'
			  },
 			 billing: {
    			name: 'Domestic',
			    street: shippingData.block,
			    town_city: shippingData.city,
			    county_state: 'IN-TG',
			    postal_zip_code: shippingData.zip,
			    country: 'IN'
				},
				payment: {
			      gateway: 'test_gateway',
			      card: {
			        number: '4242424242424242',
			        expiry_month: '02',
			        expiry_year: '24',
			        cvc: '123',
			        postal_zip_code: '94107',
			      }
			}}
			OnCaptureCheckout(checkoutToken.id,orderData);
			timeout();
			nextStep();

		//}

	}
	return (
		<>
			<Review checkoutToken={checkoutToken}/>
			<Divider/>
			<Typography variant="h6" gutterBottom style={{margin:'20px 0'}}>
				Payment 
			</Typography>
			<Elements stripe={stripePromise}>
				<ElementsConsumer>
					{(elements,stripe)=>(
						<form onSubmit={(e) => Submit(e,elements,stripe)}>
							<CardElement/>
							<br/>
							<br/>
							<div style={{display:'flex' ,justifyContent:'space-between'}}>
								<Button variant="outlined" onClick={backStep}>
									Back
								</Button>
								<Button type='submit' variant='contained' disabled={stripe} color="primary">
									Pay { checkoutToken.live.subtotal.formatted_with_symbol}
								</Button>


							</div>
						</form>

						)}
				</ElementsConsumer>
			</Elements>
			
		</>
		)
}

export default PaymentForm;