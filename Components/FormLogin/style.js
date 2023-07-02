import { StyleSheet } from 'react-native';

const style = new StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    input: {
        width: '100%',
        fontSize: 20,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ded2b8',
        color: 'rgb(58, 57, 103);',
        marginBottom: 20,
    },
    submitBtn: {
        width: '100%',
        height: 50,
        backgroundColor: '#3a3967',
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    breakWrapper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontSize: 20,
    },
    breakLine: {
        height: 1,
        backgroundColor: '#3a3967',
        width: 150,
    },
    breakText: {
        marginHorizontal: 10,
        fontSize: 20,
    },
    footer: {
        width: '100%',
    },
    groupBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerBtn: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ded2b8',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFooterBtn: {
        fontWeight: 'bold',
        color: '#3a3967',
        fontSize: 16,
    },
});
export default style;
