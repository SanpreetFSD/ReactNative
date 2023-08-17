import React from 'react'
import {View, Text, Button, Alert, ScrollView} from 'react-native'


export default function AboutUs(props) {
    console.log('Hello from app')

  return (
    <View style={{
        marginTop:30
    }}>
        <Text style={{
            color:'red'
        }}>This is AboutUs</Text>

        < Button title='Click me'
            onPress={() => Alert.alert('Button click response')}
        
        />
    </View>
  )
}
