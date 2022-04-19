import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Skywalker Shopping
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/clubes-nacionais">
                <Button color="primary" variant="outlined">Clubes Nacionais</Button>
            </Link>
            <Link to="/clubes-europeus">
                <Button color="primary" variant="outlined">Clubes Europeus</Button>
            </Link>
            <Link to="/camisas-historicas">
                <Button color="primary" variant="outlined">Camisas Históricas</Button>
            </Link>
            <Link to="/selecoes-nacionais">
                <Button color="primary" variant="outlined">Seleções Nacionais</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
