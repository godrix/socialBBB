import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Stories from '../../components/Stories';
import Card from '../../components/Card';
import Background from '../../components/Background';
import { FeedList } from './styles';
import api from '../../services/api';
import { stories, feed } from '../../server/db';

export default function Feed() {
  // const [stories, setStories] = useState([]);
  // useEffect(() => {
  //   async function loadInitialData() {
  //     const response = await api.get('stories');
  //     setStories(response.data);
  //     console.log(response);
  //   }
  //   loadInitialData();
  // }, []);
  return (
    <>
      <Stories storieData={stories} />
      <Background>
        <FeedList
          data={feed}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={item => item.id}
        />
      </Background>
    </>
  );
}

Feed.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <AntDesign name="home" size={20} color={tintColor} />
  ),
};
