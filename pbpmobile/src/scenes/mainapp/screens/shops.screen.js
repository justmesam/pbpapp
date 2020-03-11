import React, { Fragment, useContext, useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { fetchShops } from '../../../data/api/actions'
import { StoreContext } from '../../../data/context/store.context'

const {height, width} = Dimensions.get('window');



const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: height,
   width: width,
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
   height: height,
 },
});

 const ShopMap  = () => {
   const { store, dispatch } = useContext(StoreContext)
   const { shops } = store


   useEffect(() => {
     fetchShops(dispatch, 5)
   }, [])

   return (
     <View style={styles.container}>
       {shops.count < 1
       ? <Text> You have not ordered from any shop yet</Text>
        : <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           moveOnMarkerPress = {false}
           showsUserLocation={true}
           showsCompass={true}
           showsPointsOfInterest = {false}
           region={{
             latitude: -1.220825,
             longitude: 36.864941,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,
           }}
         >
         {shops.shops.map((shop, i) => {
           return(
           <MapView.Marker
             key={i}
             coordinate={{
              latitude: parseFloat(shop.latitude),
              longitude: parseFloat(shop.longitude)
            }}
            title={shop.name}
            description={''}
          />
         )})}
         </MapView>}
     </View>
);}

export default ShopMap
