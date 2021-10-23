import React from 'react';
import { View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

function index(props) {
  const image = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
  ]
  return (
    <SliderBox
      images={image}
      sliderBoxHeight={200}
      onCurrentImagePressed={props.onPress}
      dotColor="#7242F9"
      inactiveDotColor="#FFF"
    />

  );
}

export default index;