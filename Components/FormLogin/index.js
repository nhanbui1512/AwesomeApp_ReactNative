import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import style from './style';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={style.wrapper}>
            <TextInput
                onChangeText={(value) => {
                    setEmail(value);
                }}
                placeholder="Email"
                style={style.input}
            ></TextInput>
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={style.input}
                onChangeText={(value) => {
                    setPassword(value);
                }}
            ></TextInput>
            <TextInput secureTextEntry placeholder="Repeat Password" style={style.input}></TextInput>

            <TouchableOpacity
                onPress={() => {
                    console.log(email);
                    console.log(password);
                }}
                style={{ width: '100%' }}
            >
                <View style={style.submitBtn}>
                    <Text style={style.submitText}>Sign up</Text>
                </View>
            </TouchableOpacity>

            <View style={style.breakWrapper}>
                <View style={style.breakLine}></View>
                <Text style={style.breakText}>or</Text>
                <View style={style.breakLine}></View>
            </View>

            <View style={style.footer}>
                <View style={style.groupBtn}>
                    <TouchableOpacity style={{ flex: 1, paddingRight: 5 }}>
                        <View style={style.footerBtn}>
                            <Text style={style.textFooterBtn}>Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, paddingLeft: 5 }}>
                        <View style={style.footerBtn}>
                            <Text style={style.textFooterBtn}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 18, color: '#3a3967' }}>
                    Already have an account?
                </Text>
                <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 20, color: '#3a3967', fontWeight: 'bold' }}>
                    Log in
                </Text>
            </View>
        </View>
    );
}

export default FormLogin;
