import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

//declarando as propriedades que o componente vai receber dinamicamente
interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

// ...rest faz referência a todas as outras propriedades existentes da ViewProps, ou seja, declaramos title e subtitle que definimos e conhecemos, mas também deixamos prontas pra uso todas as outras existentes
export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
        
        <Text style={styles.title}>
            {title}
        </Text>

        <Text style={styles.subtitle}>
            {subtitle}
        </Text>

    </View>
  );
}