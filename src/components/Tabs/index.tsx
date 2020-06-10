import React from 'react';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Main() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear Conta</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}