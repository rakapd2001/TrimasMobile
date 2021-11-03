import { Body, Container, Header, Left, Tab, TabHeading, Tabs, Title } from 'native-base'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Camera from './camera'

const Patroli = () => {
    return (
        <Container>
            <Header style={{ backgroundColor: '#000080' }} hasTabs>
                <Left>
                    <TouchableOpacity>
                        <FontAwesome name="arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>
                        Patroli
                    </Title>
                </Body>
            </Header>
            <Tabs>
                <Tab heading={
                    <TabHeading style={{ backgroundColor: '#000080' }}>
                        <FontAwesome name="camera" size={15} color="white" style={{ marginRight: 5 }} />
                        <Text>Camera</Text>
                    </TabHeading>}>
                    <Camera />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Patroli

const styles = StyleSheet.create({})
