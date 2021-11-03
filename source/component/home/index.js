import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Subtitle, Title, Body, Left, Grid, Col, Content } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
    return (
        <Container>
            <Header span style={{ backgroundColor: '#000080' }}>
                <Left>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <FontAwesome name="bars" size={25} color="white" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>
                        Dashboard
                    </Title>
                    <Subtitle>
                        Intranet Trimas
                    </Subtitle>
                </Body>
            </Header>
            <Content>
                <Grid>
                    <Col
                        style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('User')}
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                        >
                            <FontAwesome name="user-alt" size={25} color='black' />
                            <Text style={{ color: 'black', marginTop: 5 }}>User</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col
                        style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="info-circle" size={25} color='black' />
                            <Text style={{ color: 'black', marginTop: 5 }}>About</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid>
                <Grid>
                    <Col
                        style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Patroli')}
                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="shield-alt" size={25} color='black' />
                            <Text style={{ color: 'black', marginTop: 5 }}>Patroli</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})
