import { Grid } from '@radix-ui/themes'
import Customer from './Customer'
import Order from './Order'
import Rating from './Rating'
import Store from './Store'

const Overview = () => {
    return (
        <Grid gap={'4'} columns={'2'} rows={'3'}>
            <Customer />
            <Store />
            <Order />
            <Rating />
        </Grid>
    )
}

export default Overview
