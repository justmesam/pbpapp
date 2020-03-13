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
   const { shops, coordinates } = store
   const [region, setRegion ] = useState({
     latitude: -1.2817565,
     longitude: 36.8349873,
     latitudeDelta: 0.015,
     longitudeDelta: 0.0121,
   })


   useEffect(() => {
     fetchShops(dispatch, 5)
     handleCurrent()
   }, [])

   const handleCurrent = () =>{
     if (JSON.stringify(coordinates) !== '{}'){
       setRegion({
         ...region,
         latitude: coordinates.latitude,
         longitude: coordinates.longitude,
       })
     }
   }

   return (
     <View style={styles.container}>
       {shops.count < 1
       ? <Text style={styles.fallBackText}>
           You have not ordered from any shop yet!
         </Text>
        : <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           moveOnMarkerPress = {false}
           showsCompass={true}
           showsPointsOfInterest = {false}
           region={region}
           maxZoomLevel={12}
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
