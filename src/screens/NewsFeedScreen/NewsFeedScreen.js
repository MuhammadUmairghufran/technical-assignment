import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../components/post/Post';
import colors from '../../utlis/res/colors';
import images from '../../utlis/res/images';
import axios from 'axios';
export default class NewsFeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount = () => {
    var payload = {
      token: 'sp6JDUrJl8kJxEXQf1mDdw',
      data: {
        userName: 'nameFirst',
        placeName: 'addressCountry',
        imgUrl: 'https://picsum.photos/1920/1080',
        likeCount: '103',
        commentCount: '21',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra.',
        publishDate: new Date().toDateString(),
      },
    };

    axios({
      method: 'post',
      url: 'https://app.fakejson.com/q',
      data: payload,
    }).then((res) => {
      this.setState(
        {
          post: res.data,
        },
        () => {
          console.log(this.state.post);
        },
      );
    });
  };

  render() {
    const data = [
      {key: '1'},
      {key: '2'},
      {key: '3'},
      {key: '4'},
      {key: '5'},
      {key: '6'},
      {key: '7'},
      {key: '8'},
      {key: '9'},
      {key: '10'},
    ];
    return (
      <FlatList
        style={{backgroundColor: colors.background}}
        data={data}
        renderItem={({item, index}) => <Post post={this.state.post} />}
      />
    );
  }
}
