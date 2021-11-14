import { Body, Button, Card, CardItem, Container, Content, Grid, Left, List, ListItem } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const Results = () => {
    return (
        <Container style={{ padding: 2 }}>
            {/* Card */}
            <View style={{
                flex: 1
            }}>
                <View style={{
                    marginTop: 10,
                    backgroundColor: '#fff',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    padding: 5,
                    height: 50,
                    flexDirection: 'row',
                    borderRadius: 10
                }}>
                    <FontAwesome name="map-marker-alt" size={20} color="black" style={{ marginRight: 5 }} />
                    <Text style={{ color: 'black', fontWeight: '200', fontSize: 20, fontFamily: 'consolas' }}>
                        Lokasi : Tempat Sampah
                    </Text>
                    <Button dark full style={{ marginLeft: 5, width: 40, height: 40, borderRadius: 10 }}>
                        <FontAwesome name="info" size={15} color="white" />
                        {/* <Text style={{ color: 'white', fontSize: 17 }}>Info</Text> */}
                    </Button>
                </View>
            </View>
        </Container>
    )
}

export default Results

const styles = StyleSheet.create({})
