import { SafeAreaView, View, StyleSheet} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/PlanetHeader'

export default function Details() {
  return (
    <SafeAreaView style={style.container}>
      <PlanetHeader backBtn={true}/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
})