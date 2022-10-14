//TouchableOpacity: torna o lugar clicável
//TouchableOpacityProps são todas as propriedades como onPress... 
//ImageBackground é a capa do jogo, recebida dinamicamente

import { 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps, 
    ImageBackground, 
    ImageSourcePropType 
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

//definindo as props recebidas pelo card
//usando o export para reaproveitar a interface nos lugares onde for utilizar o card
export interface GameCardProps {
    id: string;
    title: string;
    _count: {
        ads: number;
    }
    bannerUrl: string;
}

//criando essa interface só para facilitar o acesso pelo componente
interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {... rest}>
        
        <ImageBackground 
        style={styles.bannerUrl}
        source={ {uri: data.bannerUrl}}
        >
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >

                <Text style={styles.title}>
                    {data.title}
                </Text>

                <Text style={styles.ads}>
                    {data._count.ads} anúncios
                </Text>
                
            </LinearGradient>
        </ImageBackground>

    </TouchableOpacity>
  );
}