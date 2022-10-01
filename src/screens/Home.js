import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/PlanetHeader'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/PlanetList'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={style.list}
        keyExtractor={(item) => item.name}
        data={PLANET_LIST}
        renderItem={({ item, index }) => {
          return (
            <View style={style.item}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={[style.circle, { backgroundColor: item.color }]}></View>
                <Text preset="h4" style={style.itemName}>{item.name}</Text>
              </View>
              <AntDesign name="right" size={20} color="white" />
            </View>
          )
        }}
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
    marginTop: spacing[2]
  },
  rightIcon: {
    marginLeft: 30
  },
  separator: {
    borderWidth: 0.5,
    borderBottomColor: colors.white
  }
})