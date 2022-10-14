import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
    source={backgroundImg}
    defaultSource={backgroundImg} //memoriza a imagem padrão e facilita o carregamento
    style={styles.container} 
    >
        {children}
    </ImageBackground>

  );
}