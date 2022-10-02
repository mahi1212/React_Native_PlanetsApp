import { SafeAreaView, View, StyleSheet, ScrollView, Pressable} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/PlanetHeader'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'


export default function Details({navigation, route}) {
  const {planet} = route.params;

  const renderImage = (name) => {
    switch(name) {
      case "mercury":
        return <MercurySvg />
      case "venus":
        return <VenusSvg />
      case "earth":
        return <EarthSvg />
      case "mars":
        return <MarsSvg />
      case "jupiter":
        return <JupiterSvg />
      case "saturn":
        return <SaturnSvg />
      case "uranus":
        return <UranusSvg />
      case "neptune":
        return <NeptuneSvg />
      }
  }
  const {name, description, wikiLink} = planet;
  return (
    <SafeAreaView style={style.container}>
      <PlanetHeader backBtn={true}/>
      <ScrollView>
        <View style={style.imageView}>
          {renderImage(name)}
        </View>
        {/* details */}
        <View style={style.detailsView}>
          <Text preset='h1' style={style.name}>{name}</Text>
          <Text preset='h4' style={style.description}>{description}</Text>
          <Pressable style={style.source}>
            <Text preset='h4'>Source: </Text>
            <Text preset='h4' style={style.wikipedia}> Wikipedia</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageView: {
      marginTop:spacing[8],
      padding:spacing[5],
      justifyContent:'center',
      alignItems:'center',
    },
    detailsView: {
      marginTop: spacing[10],
      marginHorizontal: spacing[6],
      alignItems:'center'
    },
    name: {
      textTransform:'uppercase'
    },
    description:{
      textAlign:'center',
      marginTop: spacing[5],
      lineHeight: 21
    },
    source: {
      flexDirection:'row',
      alignItems:'center',
      marginTop: spacing[4]
    },
    wikipedia: {
      textTransform:'capitalize',
      fontWeight: 800,
      textDecorationLine:'underline'
    }
})