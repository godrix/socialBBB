import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import VideoPlayer from '../../components/Videoplayer';
import Background from '../../components/Background';
import api from '../../services/api';

export default function RaioX() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadDataApi() {
      const response = await api.get(
        'https://d1izikxk6qog.cloudfront.net/cdn/raiox/daily/2020-01-30.json',
      );

      const data = response.data.map(element => {
        return {
          _id: element._id,
          videoUrl: element.videoUrl,
          name: element.brother.name,
          group: element.brother.group,
        };
      });
      setVideos(data);
      console.log(data);
    }
    loadDataApi();
  }, []);

  if (!videos) {
    return null;
  }
  return (
    <Background>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoPlayer data={item} />}
        keyExtractor={item => item._id}
      />
    </Background>
  );
}

RaioX.navigationOptions = {
  tabBarLabel: 'Raio X',
  tabBarIcon: ({ tintColor }) => (
    <AntDesign name="playcircleo" size={20} color={tintColor} />
  ),
};
