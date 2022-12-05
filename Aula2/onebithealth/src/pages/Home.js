import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import MyImageButton from './components/MyImageButton';

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <MyImageButton
                            title="Produtos"
                            btnColor='#2992C4'
                            btnIcon="shopping-cart"
                            customClick = {() => navigation.navigate('Produtos')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;