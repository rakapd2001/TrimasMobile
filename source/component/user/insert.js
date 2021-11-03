import { Container, Header, Left, Body, Title, Content, Form, Item, Label, Input, Button } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const Insert = ({ navigation }) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const Submit = async () => {
        const data = {
            'name': name,
            'username': username,
            'password': password
        }
        try {
            const response = await fetch('http://192.168.0.115/ci_api/api/User/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await response.json()
            console.log(json);
        } catch (error) {

        }
    }
    return (
        <Container>
            <Header style={{ backgroundColor: '#000080' }} span>
                <Left>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome name="arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>
                        Insert a New User
                    </Title>
                </Body>
            </Header>
            <Content>
                <Form style={{ padding: 0 }}>
                    <Item stackedLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: '#607D8B' }}>Name</Label>
                        <Input style={{ backgroundColor: '#ECEFF1', borderRadius: 10, marginTop: 1 }}
                            value={name}
                            onChangeText={(value) => setName(value)}
                        />
                    </Item>
                    <Item stackedLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: '#607D8B' }}>Username</Label>
                        <Input style={{ backgroundColor: '#ECEFF1', borderRadius: 10, marginTop: 1 }}
                            value={username}
                            onChangeText={(value) => setUsername(value)}
                        />
                    </Item>
                    <Item stackedLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: '#607D8B' }}>Password</Label>
                        <Input style={{ backgroundColor: '#ECEFF1', borderRadius: 10, marginTop: 1 }}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />
                    </Item>
                    <Button block primary style={{ marginTop: 10 }} onPress={Submit}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Insert</Text>
                    </Button>
                </Form>
            </Content>
        </Container >
    )
}

export default Insert

const styles = StyleSheet.create({})
