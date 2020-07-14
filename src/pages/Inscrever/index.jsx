import React from 'react';

import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import { Container } from '../../styles/GlobalStyled';

import ProSel from '../../images/seletivo.jpg';

import { Processo, H1, Main, Section, Footer, FooterDiv, DivFooter } from './styled';

export default function Inscrever() {
    return (
        <>
            <Header />
            <NavBar />
            <Container> 
                <Processo src={ProSel} alt='Processo Seletivo'></Processo>
                <H1>CONFIRA ABAXO AS DATAS E <strong>MODALIDADES DE PROVA</strong></H1>
                
                <Main>
                    <Section>
                        <div>
                            <h1>VESTIBULAR DIGITAL</h1>
                        </div>
                        <p>Faça seu vestibular sem sair de casa</p>
                        <button type='button'>INSCREVA-SE</button>
                    </Section>

                    <Section>
                        <div>
                            <h1>PROVA TRADICIONAL</h1>
                        </div>
                        <p>Descontos especiais</p>
                        <p>de até <strong>100%</strong></p>

                        <p>Sem datas disponíveis no momento.</p>
                    </Section>

                    <Section>
                        <div>
                            <h1>PROVA AGENDADA</h1>
                        </div>
                        <p>Descontos especiais</p>
                        <p>de até <strong>100%</strong></p>

                        <p>Sem datas disponíveis no momento.</p>
                    </Section>
                </Main>
            </Container>

            <Footer>
                <FooterDiv>
                    <p>USE SUA NOTA DO</p>
                    <h1>ENEM</h1>
                    <p>E INGRESSE SEM FAZER PROVA</p>
                </FooterDiv>

                <DivFooter>
                    <p>Descontos especiais.</p>
                    <button type='buttom'>Insira suas notas</button>
                </DivFooter>
            </Footer>
        </>    
    )
}