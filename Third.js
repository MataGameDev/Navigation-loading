import React from 'react';
import { View,Button } from 'react-native';
import loading from './loading';
import styles from './styles';

const Third = loading(({navigation}) =>(
    <View style={styles.container}>
        <Button 
        title='Primera Pagina'
        onPress={() => navigation.navigate('First')}
        />
        <Button
        title='Segunda Pagina' 
        onPress={() => navigation.navigate('Second')}
        />
    </View>
));

export default Third;