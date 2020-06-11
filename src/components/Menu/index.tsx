import React from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

const string = "https://github.com/lucascprazeres";

interface Props {
  translateY: Animated.Value
}

const Menu: React.FC<Props> = (props) => (
  <Container style={{
    opacity: props.translateY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
    })
  }}
  >
    <Code>
      <QRCode
        value={string}
        size={80}
        backgroundColor="#FFF"
        color="#8B10AE"
      />
    </Code>

    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Me Ajuda</NavText>
      </NavItem>

      <NavItem>
        <Icon name="person-outline" size={20} color="#FFF" />
        <NavText>Perfil</NavText>
      </NavItem>

      <NavItem>
        <Icon name="credit-card" size={20} color="#FFF" />
        <NavText>Configurar Cartão</NavText>
      </NavItem>

      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Configurações do App</NavText>
      </NavItem>
    </Nav>

    <SignOutButton onPress={() => { }}>
      <SignOutButtonText>SAIR DO APP</SignOutButtonText>
    </SignOutButton>
  </Container>
);

export default Menu