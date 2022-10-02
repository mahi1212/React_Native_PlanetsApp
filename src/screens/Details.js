import { SafeAreaView, View, StyleSheet, ScrollView, Pressable, Linking} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/PlanetHeader'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'

// repeating content
const PlanetSection = ({title, value}) =>{
  return(
    <View style={style.PlanetSection}>
      <Text preset='small' style={{textTransform:'uppercase'}}>{title}</Text>
      <Text preset='h2'>{value}</Text>
    </View>
  )
}

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

export default function Details({ route }) {
  const {planet} = route.params;
  const {name, description, wikiLink, rotationTime, revolutionTime, radius, avgTemp} = planet;
  const onPressLink = () => {
    Linking.openURL(wikiLink)
  }

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
          <Text preset='small' style={style.description}>{description}</Text>
          <Pressable style={style.source} onPress={onPressLink}>
            <Text preset='h4'>Source: </Text>
            <Text preset='h4'  style={style.wikipedia}> Wikipedia</Text>
          </Pressable>
        </View>
        <View style={{height:40}} />
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
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
      textAlign:'justify',
      marginTop: spacing[5],
      lineHeight: 21,
      color:colors.white
    },
    source: {
      flexDirection:'row',
      alignItems:'center',
      marginTop: spacing[5]

    },
    wikipedia: {
      textTransform:'capitalize',
      fontWeight: 800,
      textDecorationLine:'underline'
    },
    PlanetSection: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal: spacing[5],
      paddingVertical:spacing[3],
      borderWidth:1,
      borderColor:colors.gray,
      marginHorizontal: spacing[5],
      marginBottom: spacing[4],
    }
})