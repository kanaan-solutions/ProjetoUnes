import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Span, StyledLink } from './styleNavBar';

export default function NavBar() {
    const handleClick = (e) => {
        const link = e.currentTarget; 
        link.classList.add("active");
    };

    return(
        <Nav>
            <StyledLink onClick={handleClick} to={'/'}>
                <Span className='active' >HOME</Span>
            </StyledLink>
            <StyledLink onClick={handleClick} to={'/quemSomos'}>
                <Span>QUEM SOMOS</Span>
            </StyledLink>
            <StyledLink onClick={handleClick} to={'/contato'}>
                <Span>CONTATO</Span>
            </StyledLink>
            <StyledLink onClick={handleClick} to={'/inscrever'}>
                <Span>INSCREVA-SE</Span>
            </StyledLink>
        </Nav>
    )
}