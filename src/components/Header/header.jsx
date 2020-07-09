import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Form } from './styleHeader';

import Img from '../../images/logo.png';

export default function Header() {
    return(
        <Nav>
            <Link to={'/'}>
                <img src={Img} alt='brandUnes'></img>
            </Link>
            <Form>
                <label>Nº MATRÍCULA:</label>
                <input type='text'></input>
                <label>SENHA:</label>
                <input type='password'></input>
                <button type='button'>ENTRAR</button>
            </Form>
        </Nav>
    )
}