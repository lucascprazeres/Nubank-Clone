import React from 'react';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import { 
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Anotation
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>205.234,98</Description>
          </CardContent>
          <CardFooter>
            <Anotation>
              Transferência de R$ 20,00 realizada por Lucas dos Prazeres às 17:00h
              </Anotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}