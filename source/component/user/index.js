import { Container, Header, Left, Body, Title, Subtitle, Content, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import UserAvatar from 'react-native-user-avatar'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

const User = ({ navigation }) => {
    const [user, setUser] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => getUser()).then(() => setRefreshing(false))
    }, [])
    useEffect(() => {
        getUser()
    }, [])
    const getUser = async () => {
        try {
            const response = await fetch('http://192.168.0.115/ci_api/api/User/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            setUser(json.data)
            console.log(json.data);
        } catch (error) {

        }
    }
    const deleteUser = async (id) => {
        console.log(id);
        try {
            const response = await fetch('http://192.168.0.115/ci_api/api/Delete/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': id
                })
            })
            const json = await response.json()
            console.log('Response :', json);
            getUser()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
            <Header style={{ backgroundColor: '#000080' }}>
                <Left>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <FontAwesome name="bars" size={25} color="white" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>
                        List of User
                    </Title>
                </Body>
            </Header>
            {/* top */}
            <View style={{
                height: 90, backgroundColor: '#000080', alignItems: 'center',
                borderBottomStartRadius: 25, borderBottomEndRadius: 25
            }}>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 25
                    }}>
                    User</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    width: 100, height: 30,
                    justifyContent: 'center',
                    borderRadius: 30
                }} onPress={() => navigation.navigate('Insert')}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Insert</Text>
                </TouchableOpacity>
            </View>
            {/* End Top */}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={{ backgroundColor: '#E0E0E0', flex: 1, padding: 10 }}>
                    {/* Data */}
                    {user.map((user) => {
                        return (
                            <View key={user.id} style={{ padding: 10, backgroundColor: 'white', borderRadius: 10, marginTop: 10, flexDirection: 'row', height: 70 }}>
                                <FontAwesome name="user" color="black" size={20} />
                                {/* <UserAvatar size={50} name={user.name} /> */}
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}>Name: {user.name}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 50, height: 30, position: 'absolute', right: 20, top: 5 }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 20,
                                            height: 30,
                                            justifyContent: 'center',
                                            marginEnd: 0
                                        }}
                                        onPress={() => Alert.alert(
                                            'Information',
                                            'Apakah Yakin akan menghapus User?',
                                            [
                                                {
                                                    text: 'Tidak',
                                                    onPress: () => console.log('Tidak')
                                                },
                                                {
                                                    text: 'Ya',
                                                    onPress: () => deleteUser(user.id)
                                                }
                                            ]
                                        )}
                                    // onPress={() => deleteUser(user.id)}
                                    >
                                        <FontAwesome name="trash-alt" size={25} color="#D50000" />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 20,
                                            height: 30,
                                            justifyContent: 'center',
                                            marginEnd: 0
                                        }}
                                        onPress={() => navigation.navigate('Update', {
                                            id_update: user.id,
                                            name_update: user.name,
                                            username_update: user.username,
                                            password_update: user.password,
                                        })}
                                    >
                                        <FontAwesome name="edit" size={27} color="#FFB300" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                    {/* End Data */}
                </View>
            </ScrollView>
        </Container >
    )
}

export default User

const styles = StyleSheet.create({})
