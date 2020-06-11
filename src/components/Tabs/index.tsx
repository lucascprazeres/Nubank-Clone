import React from 'react';

import {Animated} from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

interface Props {
  translateY: Animated.Value
}

const Main: React.FC<Props> = (props)  => {
  return (
    <Container style={{
      transform: [{
        translateY: props.translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: props.translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      })
    }}
    >
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

export default Main;