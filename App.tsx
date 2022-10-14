import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { 
  useFonts, //carregamento da fonte
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';



export default function App() {
  
  //declarando o fontsLoaded pra saber se a fonte já foi carregada na aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  
  const getNotificationListener = useRef<Subscription>(); //receber notificação
  const responseNotificationListener = useRef<Subscription>(); //responder notificação
  
  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  }, []);

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //faz a statusbar sobrepor a aplicação
      />
      {/* Só executa a Home caso as fontes tenham sido carregadas */}
      { fontsLoaded ? <Routes /> :  <Loading />}

    </Background>
  );
}


