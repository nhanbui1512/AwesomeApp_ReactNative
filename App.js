import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import FormLogin from './Components/FormLogin';

export default function App() {
    const imageUrl = {
        uri: 'https://assets.api.uizard.io/api/cdn/stream/a906f6d3-b436-4cb6-866f-f56011c75b74.png',
    };
    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <ImageBackground style={styles.image} source={imageUrl} />
            </View>
            <Text style={styles.header}>Start reading {'\n'} your favorite books today !</Text>
            <FormLogin />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        backgroundColor: '#fbf7ef',
    },
    backgroundImage: {
        width: '100%',
        height: 350,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    header: {
        fontSize: 38,
        fontWeight: 'bold',
        paddingTop: '15%',
        color: 'rgb(58, 57, 103)',
        fontFamily: 'Suez One',
        width: 380,
        textAlign: 'center',
    },
    formWrapper: {},
});
