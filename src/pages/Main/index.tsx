import React from 'react';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

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
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  function handleStateChange(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={handleStateChange}
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp'
                })
              }]
            }}
          >
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

        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  );
}