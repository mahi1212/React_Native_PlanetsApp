import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/PlanetHeader'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/PlanetList'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlanetItem = ({item}) =>{
  const navigation = useNavigation();
  const {name, color} = item;
  
  return(
    <Pressable onPress={()=>{
      navigation.navigate("Details", {planet: item})
    }} style={style.item}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={[style.circle, { backgroundColor:color }]}></View>
        <Text preset="h4" style={style.itemName}>{name}</Text>
      </View>
      <AntDesign name="right" size={20} color="white" />
    </Pressable>
  )
}
export default function Home({navigation}) {
  
  // render item of flatList
  const renderItem = (({ item }) => {
    return <PlanetItem item={item} />
  })

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style={{color: 'auto'}} />
      <PlanetHeader />
      <FlatList
        contentContainerStyle={style.list}
        keyExtractor={(item) => item.name}
        data={PLANET_LIST}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={style.separator}></View>}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  list: {
    padding: spacing[5]
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[3],
    alignSelf:'center'
  },
  rightIcon: {
    marginLeft: 30
  },
  separator: {
    borderWidth: 1,
    borderBottomColor: colors.white
  }
})