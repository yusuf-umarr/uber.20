import React from 'react'
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptionCard from '../components/RideOptionCard'
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'





const NavigateCard = () => {
        const dispatch = useDispatch()
        const navigation = useNavigation()


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hello</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        placeholder="Where To?"
                         nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}

                        styles={toInputeBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                            location: details.geometry.location,
                                            description: data.description
                                        })                                      
                                        
                                        );
                                        navigation.navigate('RideOptionCard')
                                        
                                    }}
                        
                        
                        enablePoweredByContainer={false}// turn off the google  ad
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
        />
                </View>
                <NavFavourites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t 
                border-gray-100`}>
                <TouchableOpacity 
                onPress={() => navigation.navigate("RideOptionCard")}
                style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full `}>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center ml-2`} >Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row bg-black  w-24 px-4 py-3
                 rounded-full `}>
                    <Icon name="fast-food-outline" type="ionicon" color="white" size={16} />
                    <Text style={tw` text-white text-center ml-2`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputeBoxStyles = StyleSheet.create({
    container:{
            backgroundColor: "white",
            paddingTop: 20,
            flex: 0,
    },
    textInput:{
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
