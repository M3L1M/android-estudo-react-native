import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import Mybutton from '../components/Mybutton';
import MyImageButton from '../components/MyImageButton';


const HomeProduto = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <MyImageButton
                            title="Adicionar produto"
                            btnColor='#2992C4'
                            btnIcon="add-shopping-cart"
                            customClick = {() => navigation.navigate('AdicionarProduto')}
                        />

                        <MyImageButton
                            title="Visualizar todos os produto"
                            btnColor='#2992C4'
                            btnIcon="shopping-cart"
                        customClick = {() => navigation.navigate('ListarProdutos')}
                        />

                        <MyImageButton
                            title="Atualizar produto"
                            btnColor='#2992C4'
                            btnIcon="add-shopping-cart"
                        //customClick = {() => navigation.navigate('AdicionarProduto')}
                        />

                        
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeProduto;