import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data= [
    {
        id:"Uber-X-01",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id:"Uber-XL-02",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id:"Uber-LUX-03",
        title: "UberLUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

const RideOptionCard = () => {
    const navigation = useNavigation()
    const [select, setSelect] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <SafeAreaView style={tw`bg-white  flex-1 `}>
            <View style={tw`flex-row  items-center justify-between mb-2`}>
                <View stle={tw``} >
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw` ml-3 z-50 rounded-full`}>
                        <Icon name="chevron-left" type="font-awesome"/>
                    </TouchableOpacity>    
                </View>
                <View stle={tw``} >
                    <Text style={tw`  text-xl `}>
                        Select A Ride - {travelTimeInformation?.distance.text}</Text>    
                </View>
                <View stle={tw`text-center`} >
                    <Text style={tw` text-white `}>.</Text>    
                </View>
            </View>
            <FlatList 
            data={data} keyExtractor={(item) => item.id}
            renderItem={({item: {id, title, multiplier, image }, item}) =>(
                <TouchableOpacity 
                    onPress={() => setSelect(item)}
                    style={tw`flex-row items-center 
                    justify-between px-10
                    ${id === select?.id && "bg-gray-200"}`}>

                    <Image style={{ width: 100, height: 70, resizeMode: "contain"}}
                    source={{uri: image}} />

                    <View sytle={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel time</Text>
                    </View>
                    <Text style={tw`text-xl`}>#1000</Text>
                </TouchableOpacity>
            )}
            />
            <View>
                <TouchableOpacity 
                disabled={!select}
                style={tw`bg-black py-3 m-3  ${!select && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl `}>Choose {select?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionCard

const styles = StyleSheet.create({})
