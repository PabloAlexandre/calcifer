import React, { useEffect } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import monthlyPayment from '../monthly-payment.png';
import fixedPayment from '../fixed-payment.png';

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex-wrap: nowrap;

  .slick-dots {
    bottom: -40px;
  }

  .slick-dots li button:before {
    content: '';
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    width: 20px;
    height: 3px;
  }
`;

const Image = styled.img`
  width: 80%;
  margin: 20px 0 0;
`;

const Title = styled.h1`
  font-weight: 300;
  opacity: 0.5;
  font-size: 22px;
  margin: 20px 0;
`;

const PaymentTypeTitle = styled.h2`
  font-weight: 300;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
`;

const PaymentTypeDescription = styled.h3`
  font-weight: 300;
  opacity: 0.5;
  font-size: 14px;
  text-align: center; 
`;

const Btn = styled.button`
  border: 2px solid #eb7c21;
  background: transparent;
  color: #eb7c21;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 20px;
  width: 80%;
  text-align: center;
  margin-top: 80px;
`;

const Center = ({ children }) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    {children }
  </div>
)

export default function CostType({ next, setField }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const mappedTypes = ['MONTH', 'FIXED'];

  useEffect(() => {
    setField('type')(mappedTypes[0]);
  }, []);

  return (
    <Wrapper>
      <Title>Selecione o tipo de custo</Title>
      <Slider {...settings} afterChange={i => setField('type')(mappedTypes[i])}>
        <>
          <Center>
            <Image src={monthlyPayment} />
          </Center>
          <PaymentTypeTitle>Custo Mensal</PaymentTypeTitle>
          <PaymentTypeDescription>
          Esse custo será relativo a esse mês e não será mais válido após o fechamento das contas
          </PaymentTypeDescription>
        </>
        <>
          <Center>
            <Image src={fixedPayment} />
          </Center>
          <PaymentTypeTitle>Custo Fixo</PaymentTypeTitle>
          <PaymentTypeDescription>
          Custos que serão reaproveitados ao longo dos meses com pequenas variações
          </PaymentTypeDescription>
        </>
      </Slider>
      <Center>
        <Btn onClick={next}>Próximo</Btn>
      </Center>
    </Wrapper>
  )
}