import React, { useState, useEffect} from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { GameController } from 'phosphor-react-native';
import * as AuthSession from 'expo-auth-session';

import { GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { THEME } from '../../theme';

export function SignIn() {

  async function handleDiscordSignIn () {
    
    const response = await AuthSession.startAsync({
      authUrl:"https://discord.com/api/oauth2/authorize?client_id=1022724743293579294&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40rhyanpinto%2Fmobile&response_type=token&scope=identify"
    });

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.acess_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log('data', data));
    
    console.log('response:',response);
  }
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Entrar"
          subtitle="Encontre o seu duo e bora jogar!"
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleDiscordSignIn}
        >
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>
            Entrar com Discord
          </Text>

        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}