import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import Product from '../../product.json';
import * as Font from 'expo-font';


const screenWidth = Dimensions.get('window').width;
const colorOptions = ['#000000', '#EC9E08', '#1A5EE3', '#F05A5A'];

export default function DetailScreen({navigation}) {
  const route = useRoute();
  const id = route.params._id;
  const product = Product.product[id];
  const [selectedColor, setSelectedColor] = React.useState('#000000');
  const [selectedSize, setSelectedSize] = React.useState('L');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showFullText, setShowFullText] = React.useState(true);
  const [favorite, setFavorite] = React.useState(false);
  let image;
  if (id === 0){
    image = require("../../assets/cardList.png")
  } else if (id === 1){
    image = require("../../assets/cardList2.png")
  } else if (id === 2){
    image = require("../../assets/cardList3.png")
  } else {
    image = require("../../assets/cardList4.png")
  }

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

  const descriptionText =  "Lorem ipsum dolor sit amet consectetur. Ornare urna eleifend hac egestas ut eu. Hac amet aliquet hac lobortis neque tortor. Ornare urna eleifend hac egestas ut eur. Love is patient, love is kind. It does not envy, it does not boast, it is not proud."

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const addFavorite = () => {
    setFavorite(!favorite);
    if (favorite){
      Alert.alert('Success','It was added to your favorite');
    } else if (!favorite) {
      Alert.alert('Success','It was removed from your favorite');
    } else {
      Alert.alert('Failed','There was a error while adding/removing to/from favorite');
    }
  };

  const handleAddToCart = () => {
    Alert.alert('Success','It was added to your cart');
  };

  return (
      <View style={styles.container}>
        <Image
            source={image}
            style={styles.backgroundImage}
        />
        <View style={styles.overlayContainer}>
          <View style={styles.overlayView}>
            <View style={styles.centeredContainer}>
              <View style={styles.sideBySideContainer}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 16, letterSpacing: 1.5, fontWeight: 600, color: '#121212' }}>
                    {product.name}
                  </Text>
                  <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={20} color="#FF8A00" />
                    <Text style={{ fontSize: 14, fontWeight: 500, color: '#121212', marginLeft: '2%' }}>
                      {product.points}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, color: '#9A9A9A', marginLeft: '3%' }}>
                      ({product.reviews})
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, color: '#121212', letterSpacing: 1.5,fontFamily: 'LexendDeca-Medium'}}>
                      ${product.newPrice}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, color: '#9A9A9A', letterSpacing: 1.5, textDecorationLine: 'line-through',fontFamily: 'LexendDeca-Medium' }}>
                      ${product.price}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.blueView}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("BottomTabs")} >
            <AntDesign name="left" size={20} color="white" style={styles.backButtonText} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.circularButton, {marginLeft: '62%'}]} onPress={addFavorite}>
            {
              favorite ?
                  <AntDesign name="hearto" size={16} color="red" />
                  :
                  <AntDesign name="heart" size={16} color="red" />
            }
          </TouchableOpacity>
          <TouchableOpacity style={[styles.circularButton, {marginLeft: '3.5%'}]} onPress={handleAddToCart}>
            <AntDesign name="shoppingcart" size={20} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: 'black', letterSpacing: 1.5, lineHeight: 20,fontFamily: 'LexendDeca-Medium' }}>
            Description
          </Text>
          <TouchableOpacity onPress={toggleFullText}>
            {showFullText ?
                <Text style={{ fontSize: 14, fontWeight: 400, color: '#747474', marginTop: '2.6%', lineHeight: 22,fontFamily: 'LexendDeca-Medium' }}>
                  {product.description.substring(0, 163)}{showFullText && '... '}
                  {showFullText && (
                      <Text style={{ fontSize: 14, fontWeight: 500, color: '#2B2B2B', lineHeight: 17.5,fontFamily: 'LexendDeca-Medium' }}>
                        Read More
                      </Text>
                  )}
                </Text>
                :
                <Text style={{ fontSize: 14, fontWeight: 400, color: '#747474', marginTop: '2.6%', lineHeight: 22,fontFamily: 'LexendDeca-Medium' }}>
                  {product.description}
                </Text>
            }
          </TouchableOpacity>
        </View>
        <View style={[styles.size, {left: '4%'}]}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: 'black', letterSpacing: 1.5, lineHeight: 20,fontFamily: 'LexendDeca-Medium' }}>
            Size
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: '47%', position: 'absolute', bottom: 0 }}>
            <TouchableOpacity style={[styles.sizeButton, selectedSize === 'S' && styles.selectedSizeButton]}
                              onPress={() => setSelectedSize('S')}>
              <Text style={{ fontSize: 11, fontWeight: 500, color: selectedSize === 'S' ? 'white' : 'black', letterSpacing: 0.5, lineHeight: 13.75,fontFamily: 'LexendDeca-Medium' }}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeButton, selectedSize === 'M' && styles.selectedSizeButton, {marginLeft: '8%'}]}
                              onPress={() => setSelectedSize('M')}>
              <Text style={{ fontSize: 11, fontWeight: 500, color: selectedSize === 'M' ? 'white' : 'black', letterSpacing: 0.5, lineHeight: 13.75,fontFamily: 'LexendDeca-Medium' }}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeButton, selectedSize === 'L' && styles.selectedSizeButton, {marginLeft: '8%'}]}
                              onPress={() => setSelectedSize('L')}>
              <Text style={{ fontSize: 11, fontWeight: 500, color: selectedSize === 'L' ? 'white' : 'black', letterSpacing: 0.5, lineHeight: 13.75,fontFamily: 'LexendDeca-Medium' }}>
                L
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeButton, selectedSize === 'XL' && styles.selectedSizeButton, {marginLeft: '8%'}]}
                              onPress={() => setSelectedSize('XL')}>
              <Text style={{ fontSize: 11, fontWeight: 500, color: selectedSize === 'XL' ? 'white' : 'black', letterSpacing: 0.5, lineHeight: 13.75,fontFamily: 'LexendDeca-Medium' }}>
                XL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeButton, selectedSize === 'XXL' && styles.selectedSizeButton, {marginLeft: '8%'}]}
                              onPress={() => setSelectedSize('XXL')}>
              <Text style={{ fontSize: 11, fontWeight: 500, color: selectedSize === 'XXL' ? 'white' : 'black', letterSpacing: 0.5, lineHeight: 13.75,fontFamily: 'LexendDeca-Medium' }}>
                XXL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.color}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: 'black', letterSpacing: 1.5, lineHeight: 20, alignSelf: 'center',fontFamily: 'LexendDeca-Medium' }}>
            Color
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            {product.colorOptions.map((color, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                      styles.colorButtonContainer,
                      selectedColor === color && [styles.selectedColorButtonContainer, { borderColor: color }],
                    ]}
                    onPress={() => setSelectedColor(color)}
                >
                  <View style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColorButton,
                  ]}>
                  </View>
                </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.addToCard} onPress={handleAddToCart}>
          <View style={styles.addToCartContent}>
            <AntDesign name="shoppingcart" size={24} color="white" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    width: '100%',
    height: '49%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  overlayView: {
    width: '92%',
    height: 89,
    backgroundColor: 'white',
    marginTop: '93.4%',
    borderRadius: 8,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  blueView: {
    position: 'absolute',
    top: '6%',
    height: '4%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '8%',
  },
  description: {
    position: 'absolute',
    top: '58%',
    height: '15%',
    width: '92%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  size: {
    position: 'absolute',
    top: '74%',
    height: '8%',
    width: '55%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  color: {
    position: 'absolute',
    top: '84.5%',
    height: '3%',
    left: '4%',
    width: '51.4%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  addToCard: {
    position: 'absolute',
    top: '90.4%',
    height: '6%',
    width: '92%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#2B2B2B',
    borderRadius: 10
  },
  backButtonText: {
    fontSize: 20,
    color: 'white',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  backButton: {
    width: screenWidth * 0.09,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  sizeButton: {
    width: screenWidth * 0.08,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },

  selectedSizeButton: {
    backgroundColor: 'black',
  },
  circularButton: {
    width: screenWidth * 0.09,
    height: screenWidth * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: screenWidth * 0.09 / 2,
  },
  colorButtonContainer: {
    width: screenWidth * 0.065,
    height: screenWidth * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: screenWidth * 0.09 / 2,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: '9%'
  },
  colorButton: {
    width: '90%',
    height: '90%',
    borderRadius: (screenWidth * 0.09 * 0.8) / 2,
  },
  selectedColorButtonContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    width: screenWidth * 0.065 + 4,
    height: screenWidth * 0.065 + 4,
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: 'white',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBySideContainer: {
    flexDirection: 'row',
    width: '86%',
    height: '54%',
  },
  addToCartContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
    fontFamily: 'LexendDeca-Medium'
  },
});