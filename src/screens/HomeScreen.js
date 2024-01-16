import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Octicons, AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

export default function HomeScreen({ navigation }) {
  const [favorites, setFavorites] = useState([false, false, false, false]);
  const addFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);

    if (updatedFavorites[index]) {
      Alert.alert('Success', 'It was added to your favorites');
    } else {
      Alert.alert('Success', 'It was removed from your favorites');
    }
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'LexendDeca-Medium': require('../../assets/fonts/LexendDeca-Medium.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.mainContainer}>

        <View style={styles.container}>

          <View style={styles.iconContainer}>
            <Octicons name="location" size={17} color="white" />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.address}>Uttara, Dhaka</Text>
          </View>

          <View>
            <Image source={require('../../assets/Search.png')} style={styles.seacrhicon} />
          </View>

          <View style={{ backgroundColor: "#F5F5F5", marginLeft: 8, borderRadius: 20, width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../../assets/ShoppingCart.png')} style={styles.icon} />
          </View>

        </View>

        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, }}>

          <View style={{ width: 343, height: 163, backgroundColor: "black", backgroundColor: "#FFF2E5", borderRadius: 10, flexDirection: "row" }}>

            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

              <View style={{ justifyContent: "center", flex: 1, }}>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 24, letterSpacing: 0, fontWeight: 600, color: '#121212' }}>
                  30% Off
                </Text>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212' }}>
                  On your first shopping
                </Text>
              </View>

              <View style={{ flex: 1, marginRight: "12%" }}>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, letterSpacing: 0, fontWeight: 600, color: '#747474' }}>
                  Use Coupon: 6B98T409
                </Text>
              </View>

            </View>
            <View style={{ flex: 1, marginRight: "5%" }}>
              <Image source={require('../../assets/title.png')} style={{ width: 163, height: 163, }} />
            </View>
          </View>
        </View>


        <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", }}>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../../assets/categories.png')} style={styles.categoriesicon} />
            <Text style={{fontFamily: 'LexendDeca-Medium',color:"#2B2B2B"}}>All categories</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../../assets/gent.png')} style={styles.categoriesicon} />
            <Text  style={{fontFamily: 'LexendDeca-Medium',color:"#9A9A9A"}}>Gent's</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../../assets/ladie.png')} style={styles.categoriesicon} />
            <Text  style={{fontFamily: 'LexendDeca-Medium',color:"#9A9A9A"}}>Ladies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../../assets/girl.png')} style={styles.categoriesicon} />
            <Text  style={{fontFamily: 'LexendDeca-Medium',color:"#9A9A9A"}}>Kids</Text>
          </TouchableOpacity>

        </View>

        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row", marginLeft: "2%" }}>

          <View style={{ flex: 1, }}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate({ name: "Detail", params: { _id: 0 } })}  >
              <ImageBackground source={require('../../assets/cardList.png')} style={styles.backgroundImage}>

                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-around", }}>

                  <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", marginLeft: '4%' }}>
                    <AntDesign name="star" size={12} color="#FF8A00" />
                    <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, fontWeight: 400, color: '#121212', marginLeft: '2%' }}>
                      4.6
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: "30%" }}>
                    <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "white", padding: 6, }} onPress={() => addFavorite(0)}>
                      {favorites[0] ? <AntDesign name="heart" size={16} color="red" /> : <AntDesign name="hearto" size={16} color="red" />}
                    </TouchableOpacity>
                  </View>

                </View>

              </ImageBackground>

            </TouchableOpacity>
            <TouchableOpacity style={{
              width: "50%", height: "10%", backgroundColor: "black", justifyContent: "center", alignItems: "center",
              borderRadius: 5, marginTop: -15, marginLeft: "20%"
            }} >
              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, fontWeight: 400, color: '#fff', }}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={{}}>

              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', marginTop: "5%" }}>
                Men Lather Jacket
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', fontWeight: "bold" }}>
                  $ 58.99
                </Text>
                <Text style={{fontFamily: 'LexendDeca-Medium', fontSize: 11, letterSpacing: 0, fontWeight: 600, color: '#9A9A9A', fontWeight: "bold", marginLeft: "5%", textDecorationLine: "line-through" }}>
                  $ 63.99
                </Text>
              </View>

            </View>

          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate({ name: "Detail", params: { _id: 1 } })}  >

              <ImageBackground source={require('../../assets/cardList2.png')} style={styles.backgroundImage}>
                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-around", }}>

                  <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", marginLeft: '4%' }}>
                    <AntDesign name="star" size={12} color="#FF8A00" />
                    <Text style={{fontFamily: 'LexendDeca-Medium', fontSize: 14, fontWeight: 400, color: '#121212', marginLeft: '2%' }}>
                      4.5
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: "30%" }}>
                    <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "white", padding: 6, }} onPress={() => addFavorite(1)}>
                      {favorites[1] ? <AntDesign name="heart" size={16} color="red" /> : <AntDesign name="hearto" size={16} color="red" />}
                    </TouchableOpacity>
                  </View>

                </View>

              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "50%", height: "10%", backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: -15, marginLeft: "25%" }} >
              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, fontWeight: 400, color: '#fff', }}>Add to Cart</Text>
            </TouchableOpacity>
            <View style={{}}>

              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', marginTop: "5%" }}>
                Woman Blazer
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{fontFamily: 'LexendDeca-Medium', fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', fontWeight: "bold" }}>
                  $ 24.99
                </Text>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, letterSpacing: 0, fontWeight: 600, color: '#9A9A9A', fontWeight: "bold", marginLeft: "5%", textDecorationLine: "line-through" }}>
                  $ 28.99
                </Text>

              </View>

            </View>
          </View>

        </View>


        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row", marginLeft: "2%" }}>

          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate({ name: "Detail", params: { _id: 2 } })} >

              <ImageBackground source={require('../../assets/cardList3.png')} style={styles.backgroundImage}>
                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-around", }}>

                  <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", marginLeft: '4%' }}>
                    <AntDesign name="star" size={12} color="#FF8A00" />
                    <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, fontWeight: 400, color: '#121212', marginLeft: '2%' }}>
                      4.7
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: "30%" }}>
                    <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "white", padding: 6, }} onPress={() => addFavorite(2)}>
                      {favorites[2] ? <AntDesign name="heart" size={16} color="red" /> : <AntDesign name="hearto" size={16} color="red" />}
                    </TouchableOpacity>
                  </View>

                </View>

              </ImageBackground>
              <TouchableOpacity style={{ width: "50%", height: "10%", backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: -15, marginLeft: "25%" }} >
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, fontWeight: 400, color: '#fff', }}>Add to Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <View style={{}}>

              <Text style={{fontFamily: 'LexendDeca-Medium', fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', marginTop: "5%" }}>
                Men Lather Jacket
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', fontWeight: "bold" }}>
                  $ 58.99
                </Text>
                <Text style={{fontFamily: 'LexendDeca-Medium', fontSize: 11, letterSpacing: 0, fontWeight: 600, color: '#9A9A9A', fontWeight: "bold", marginLeft: "5%", textDecorationLine: "line-through" }}>
                  $ 63.99
                </Text>
              </View>

            </View>
          </View>

          <View style={{ flex: 1, }}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate({ name: "Detail", params: { _id: 3 } })} >

              <ImageBackground source={require('../../assets/cardList4.png')} style={styles.backgroundImage}>
                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-around", }}>

                  <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", marginLeft: '4%' }}>
                    <AntDesign name="star" size={12} color="#FF8A00" />
                    <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, fontWeight: 400, color: '#121212', marginLeft: '2%' }}>
                      4.5
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: "30%" }}>
                    <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "white", padding: 6, }} onPress={() => addFavorite(3)}>
                      {favorites[3] ? <AntDesign name="heart" size={16} color="red" /> : <AntDesign name="hearto" size={16} color="red" />}
                    </TouchableOpacity>
                  </View>

                </View>

              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "50%", height: "10%", backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: -15, marginLeft: "25%" }} >
              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, fontWeight: 400, color: '#fff', }}>Add to Cart</Text>
            </TouchableOpacity>
            <View style={{}}>

              <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', marginTop: "5%" }}>
                Men Lather Jacket
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 14, letterSpacing: 0, fontWeight: 600, color: '#121212', fontWeight: "bold" }}>
                  $ 58.99
                </Text>
                <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 11, letterSpacing: 0, fontWeight: 600, color: '#9A9A9A', fontWeight: "bold", marginLeft: "5%", textDecorationLine: "line-through" }}>
                  $ 63.99
                </Text>
              </View>

            </View>
          </View>

        </View>

      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 20
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  iconContainer: {
    marginRight: 8,
    backgroundColor: "black",
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 32,
    height: 32,
  },
  categoriesicon: {
    width: 60,
    height: 60,
  },
  seacrhicon: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    fontFamily: 'LexendDeca-Medium',
    fontWeight: "bold",
    fontSize: 11,
    marginBottom: 4,
    color: "#747474"
  },
  address: {
    fontFamily: 'LexendDeca-Medium',
    fontSize: 14,
    color: "#2B2B2B",
    fontWeight: "700"
  },
  backgroundImage: {
    flex: 1,
    width: 164,
    height: 170,
    resizeMode: 'cover',

  },

});
