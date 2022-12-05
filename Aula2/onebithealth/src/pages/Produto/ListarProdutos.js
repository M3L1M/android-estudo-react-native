import React, { useEffect } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { DataBaseConnection } from "../../database/database-connection";

const db = DataBaseConnection.getConnection();

const ListarProdutos = () => {
    let [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_produto',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; i++) {
                        temp.push(results.rows.item(i));
                        setFlatListItems(temp)
                    }
                }
            );
        });
    }, [])

    let listItemView = (item) => {
        return (
            <View
                key={item.id}
                style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}>
                <Text style={styles.textheader}>Produto</Text>
                <Text style={styles.textbottom}>{item.nome_produto}</Text>

                <Text style={styles.textheader}>Quantidade</Text>
                <Text style={styles.textbottom}>{item.qtd_produto}</Text>

                <Text style={styles.textheader}>Preço</Text>
                <Text style={styles.textbottom}>{item.preco_produto}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                data={flatListItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
              />
            </View>
          </View>
        </SafeAreaView>
      );
    };

const styles = StyleSheet.create({
    textheader: {
        color: '#111',
        fontSize: 12,
        fontWeight: '700',

    },
    textbottom: {
        color: '#111',
        fontSize: 18,
    },
});

export default ListarProdutos;