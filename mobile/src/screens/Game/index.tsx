import { View, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  return (
    <Background>
      <View style={styles.header}>
        <TouchableOpacity>
          <Entypo
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
        </TouchableOpacity>
        </View>
          <Image 
          source={'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'}
          style={styles.logo}
          />
    </Background>
  );
}