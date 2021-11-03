import { Button, Container } from 'native-base'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

const Camera = ({ navigation }) => {
    const [isActive, setIsActive] = useState(false)
    const [valueQr, setValueQr] = useState('')
    const onScreen = async (e) => {
        setValueQr(e.data)
    }
    return (
        <Container>
            <Button onPress={() => setIsActive(true)}>
                <Text>Scan</Text>
            </Button>
            <Button danger onPress={() => setIsActive(false)}>
                <Text>Cancel</Text>
            </Button>
            {
                isActive == true ?
                    <QRCodeScanner
                        onRead={onScreen}
                        topContent={
                            <Text>
                                Scan
                            </Text>
                        }
                    />
                    : <View>
                        <Text>{valueQr}</Text>
                    </View>
            }
        </Container>
    )
}

export default Camera

const styles = StyleSheet.create({})
