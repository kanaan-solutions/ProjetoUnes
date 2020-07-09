import React from 'react';

import Img from '../../images/quemsomos.jpeg'

import { Container } from '../../styles/GlobalStyled';
import NavBar from  '../../components/NavBar/navBar';
import Header from '../../components/Header/header';

import { H1, Image, Paragraph } from './styled';

export default function QuemSomos() {
    return (
        <>
            <Header />
            <NavBar />
            <Container>
                <div>
                    <H1>Quem Somos</H1>      
                    <Image src={Img} alt='Quem Somos' />
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn't anything embarrassing hidden in the middle of text. All the
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet. It uses
                        a dictionary of over 200 Latin words, combined with a handful of model sentence
                        structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected humour, or non-characteristic
                        words etc. 
                    </Paragraph>              
                </div>

                <div>
                    <H1>Missão</H1>
                    <Paragraph>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                        de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </Paragraph>
                </div>

                <div>
                    <H1>Visão</H1>
                    <Paragraph>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                        de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </Paragraph>
                </div>

                <div>
                    <H1>Valores</H1>
                    <Paragraph>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                        de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </Paragraph>
                </div>
            </Container>
        </>    
    )
}