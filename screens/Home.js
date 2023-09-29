import * as React from "react"
import {View, Text , TouchableOpacity} from "react-native"
import StarMap from "./StarMap"
import DailyPic from "./DailyPic"
import SpaceCraft from "./SpaceCraft"

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>This is the Home screen.</Text>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}

                ><Text>Go to StarMap screen</Text></TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                }}
                ><Text>Go to DailyPic screen</Text></TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("SpaceCraft")
                }}
                ><Text>Go to SpaceCraft screen</Text></TouchableOpacity>
            </View>
        )
    }
}