import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';

interface RouteParams {
  params: GameParams;
}

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  
  return (
    <Background>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity>
          <Entypo
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
          </TouchableOpacity>
      <View style={styles.header}>
          <Image 
          source={logoImg}
          style={styles.logo}
          />
        </View>
        </SafeAreaView>
      </Background>
  );
}