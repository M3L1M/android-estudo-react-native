import React, { useState } from "react";
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
} from 'react-native';
import Mytextinput from "../components/Mytextinput";
import Mybutton from "../components/Mybutton";
import { DataBaseConnection } from "../../database/database-connection";

const db = DataBaseConnection.getConnection();



const AdicionarProduto = ({ navigation }) => {
    let [nomeProduto, setNomeProduto] = useState('');
    let [qtdProduto, setQtdProduto] = useState('');
    let [valorProduto, setValorProduto] = useState('');

    let registrarProduto = () => {
        console.log(nomeProduto, qtdProduto, valorProduto)
        if(!nomeProduto){
            alert("Por favor preencha o nome do produto");
            return;
        }if(!qtdProduto){
            alert("Por favor preencha a quantidade");
            return;
        }if(!valorProduto){
            alert("Por favor preencha o preço");
            return;
        }
        db.transaction(function (tx) {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS table_produto(id INTEGER PRIMARY KEY AUTOINCREMENT, nome_produto VARCHAR(255), qtd_produto REAL, valor_produto REAL)'
            )

            tx.executeSql(
                'INSERT INTO table_produto (nome_produto, qtd_produto, valor_produto) VALUES (?,?,?)',
                [nomeProduto, qtdProduto, valorProduto],
                
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        console.log("Oi")
                        Alert.alert(
                            'Sucesso',
                            'Usuário Registrado com Sucesso !!!',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('Produtos'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else{
                        console.log("Oi")
                        alert('Erro ao tentar Registrar o Produto !!!')
                    } 
                }
            );
        });
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>
                            <Mytextinput
                                placeholder="Nome do produto"
                                onChangeText={
                                    (nomeProduto) => setNomeProduto(nomeProduto)
                                }
                                style={{ padding: 10 }}
                            />

                            <Mytextinput
                                placeholder="Quantidade do produto"
                                onChangeText={
                                    (qtdProduto) => setQtdProduto(qtdProduto)
                                }
                                maxLength={10}
                                keyboardType="numeric"
                                style={{ padding: 10 }}
                            />

                            <Mytextinput
                                placeholder="Preço do produto"
                                onChangeText={
                                    (valorProduto) => setValorProduto(valorProduto)
                                }
                                maxLength={10}
                                keyboardType="numeric"
                                style={{ padding: 10 }}
                            />
                            <Mybutton title="Salvar" customClick={registrarProduto} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AdicionarProduto; 