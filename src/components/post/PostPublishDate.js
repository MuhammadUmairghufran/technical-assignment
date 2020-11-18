/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../utlis/res/colors';

export default function PostPublishDate({post}) {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Post Publish Date')}>
      <Text
        style={{
          color: colors.textFaded2,
          marginTop: 5,
          marginStart: 15,
          fontSize: 12,
        }}>
        {post.publishDate}
      </Text>
    </TouchableOpacity>
  );
}
