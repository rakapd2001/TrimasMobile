import { Button, Col, Container, Content, Grid } from 'native-base'
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
            <Grid style={{ maxHeight: 30, margin: 0 }}>
                <Col>
                    <Button info onPress={() => setIsActive(true)} full>
                        <Text style={{ color: 'white', fontWeight: '200' }}>Scan</Text>
                    </Button>
                </Col>
                <Col>
                    <Button success onPress={() => setIsActive(false)} full>
                        <Text style={{ color: 'white', fontWeight: '200' }}>Cancel</Text>
                    </Button>
                </Col>
            </Grid>
            <View>
                {
                    isActive == true ?
                        <View style={{ height: 500 }}>
                            <QRCodeScanner
                                onRead={onScreen}
                                topContent={
                                    <Text>
                                        Scan
                                    </Text>
                                }
                            />
                        </View>
                        : <View>
                            <Text>{valueQr}</Text>
                        </View>
                }
            </View>
        </Container>
    )
}

export default Camera

const styles = StyleSheet.create({})
