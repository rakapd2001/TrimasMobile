import { Body, Container, Header, Left, Tab, TabHeading, Tabs, Title } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Camera from './camera'
import Results from './result'

const Patroli = ({ navigation }) => {
    return (
        <Container>
            <Header style={{ backgroundColor: '#000080' }} hasTabs>
                <Left>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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
                <Tab heading={<TabHeading><FontAwesome name="camera" size={15} color="white" style={{ marginRight: 5 }} />
                    <Text>Camera</Text>
                </TabHeading>}>
                    {/* content */}
                    <Camera />
                </Tab>
                <Tab heading={<TabHeading><FontAwesome name="list" size={15} color='white' style={{ marginRight: 5 }} /><Text>Results</Text></TabHeading>}>
                    <Results />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Patroli

