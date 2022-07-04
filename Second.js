import React from 'react';
import { View,Button } from 'react-native';
import loading from './loading';
import styles from './styles';

const Second = loading(({navigation}) =>(
    <View style={styles.container}>
        <Button 
        title='Primera Pagina'
        onPress={() => navigation.navigate('First')}
        />
        <Button
        title='Tercera Pagina' 
        onPress={() => navigation.navigate('Third')}
        />
    </View>
));

export default Second;