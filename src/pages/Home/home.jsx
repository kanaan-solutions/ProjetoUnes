import React from 'react';

import { Container } from '../../styles/GlobalStyled';
import { Image, LocImage, DisplySub, Paragraph, ParagraphSub, Display, SubTopics } from './styledHome';
import MainImg from '../../images/capa.png';
import LocationImg from '../../images/local.png';
import WifiImg from '../../images/wifi.png';
import LabImg from '../../images/laboratorio.png';
import InfraImg from '../../images/infra.png';
import CoursesImg from '../../images/cursos.png';
import LibImg from '../../images/biblioteca.png';

import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';

export default function Home() {
    return(
        <>
            <Header />
            <NavBar />
            <Container>
                <div>
                    <Image src={MainImg} alt='MainImage'></Image>
                    <Paragraph>
                        Os cursos das Unes são diferenciados, fazemos uso intensivo de tecnologia e acesso a ambientes simulados de prática,
                        bibliotecas e laboratórios digitais, mas, sempre que precisar, você pode estar fazendo uso os espaços de estudos no Campus.
                        Na Unes você conta com projetos que te conectam com o mundo do trabalho, favorecendo o desenvolvimento de competências profissionais e sociemocionais.
                    </Paragraph>
                </div>   
                <Display>
                    Na Unes você conta com 
                </Display>          
            </Container> 
            <SubTopics> 
                <div>
                    <LocImage src={LocationImg} alt='Location'></LocImage>
                    <DisplySub>LOCALIZAÇÃO PRIVILEGIADA</DisplySub>
                    <ParagraphSub>Nós estamos pertinho de você. Temos unidades em todas as regiões do Brasil.</ParagraphSub>
                </div>  

                <div>  
                    <LocImage src={WifiImg} alt='Wifi'></LocImage>
                    <DisplySub>CONECTIVIDADE</DisplySub>
                    <ParagraphSub>Primeira Universidade a oferecer wifi ilimitado para os alunos.</ParagraphSub>
                </div>  

                <div>
                    <LocImage src={LabImg} alt='Labortory'></LocImage>
                    <DisplySub>LABORATÓRIOS</DisplySub>
                    <ParagraphSub>Laboratórios das áreas de exatas e biológicas, com recursos modernos que dinamizam o aprendizado.</ParagraphSub>
                </div>          

                <div>    
                    <LocImage src={LibImg} alt='Library'></LocImage>
                    <DisplySub>BIBLIOTECA</DisplySub>
                    <ParagraphSub>Informação e conhecimento disponíveis o tempo todo para você!</ParagraphSub>
                </div>

                <div>
                    <LocImage src={InfraImg} alt='Infra'></LocImage>
                    <DisplySub>INFRAESTRUTURA COMPLETA</DisplySub>
                    <ParagraphSub>Laboratórios com tecnologia de ponta para todas as áreas de estudos, Wi-fi gratuito, biblioteca em todas as unidades e muito mais!</ParagraphSub>
                </div>

                <div>
                    <LocImage src={CoursesImg} alt='Courses'></LocImage>
                    <DisplySub>CURSOS</DisplySub>
                    <ParagraphSub>São mais de 80 cursos presenciais e a distância com professores mestres e doutores.</ParagraphSub>
                </div>
            </SubTopics>
        </>
    )
}