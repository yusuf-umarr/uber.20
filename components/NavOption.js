import React from 'react'
import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import {selectOrigin} from '../slices/navSlice';
import { useSelector, useDispatch } from 'react-redux'



const data = [
    {
        id: '01',
        title: 'Get a ride',
        image: "http://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: '02',
        title: 'Order food',
        image: "http://links.papareact.com/28w",
        // image: require('../assets/images/Comfort.jpeg'),
        screen: "EatScreen",
    },
]

const NavOption = () => {
    const navigation = useNavigation()
        const origin= useSelector(selectOrigin)
        



    return (
        <FlatList //map
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
            renderItem={( { item }) =>(
            <TouchableOpacity 
            onPress={()=> navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `} 
            disabled={!origin} //disable the touchable if origin is not set
            >
                <View style={tw`${!origin && "opacity-20"} `}>
                    <Image 
                    style={{ width: 120, height: 120, }} //resizeMode: 'contain'
                    source={{ uri : item.image}}
                    />
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign' name='arrowright' color ='white'
                    />
                </View>
            </TouchableOpacity>

        )} />
    )
}

export default NavOption

const styles = StyleSheet.create({})
