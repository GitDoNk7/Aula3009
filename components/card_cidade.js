import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const card_cidade= (nome, uf)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text> 
            <> - </>
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

export default card_cidade

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3, // Sombras no Android
        shadowColor: '#000', // Sombras no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
      },
      

    cidade: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0000FF'
    },
  });