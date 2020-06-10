import React from 'react';

import { MaterialIcons as Icon } from '@expo/vector-icons'

import { Container, Top, Title, Logo } from './styles';

export default function Main() {
  return (
    <Container>
      <Top>
        <Logo source={require('../../../assets/Nubank_Logo.png')} />
        <Title>Lucas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}