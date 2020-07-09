import React from 'react';

import { Paragraph, H1, Form, Input, Label, Text, Button } from './styleContato';

import { Container } from '../../styles/GlobalStyled';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';

export default function Contato() {
    return (
        <>
            <Header />
            <NavBar />
            <Container>
                <H1>Para mais informações, entre em contato com a nossa equipe</H1>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mollis nisl.
                </Paragraph>
                <Form>
                    <Label>Email:</Label>
                    <Input type='text' />
                    <Label>Assunto:</Label>
                    <Input type='text' />
                    <Label>Descrição do problema:</Label>
                    <Text></Text>
                    <Button type='submit'>Enviar</Button>
                </Form>
            </Container>
        </>
    )
}