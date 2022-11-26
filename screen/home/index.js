import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import data from '../../data/drinks.json';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        marginTop: StatusBar.currentHeight + 10,
      }}
    >
      <Text style={{ marginTop: 8, fontSize: 15,color:"black" , fontWeight:"bold", flexDirection: 'row',width:"100%",alignItems:'center',  }}>{`Hello, ${
        user && user.name
      } !`}</Text>
      <View
        style={{
          backgroundColor: 'gold',
          padding: 1,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', width:"100%", height: 60, backgroundColor:"white", borderRadius:5, justifyContent:'center',marginBottom:5, }}>
         <Text
          style={{
            color: 'orangered',
            fontWeight: 'bold',
            fontSize: 40,
           
           
          }}
        >
         BURGER KING
        </Text>
        </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', width:"100%",  backgroundColor:"white", borderRadius:10, justifyContent:'center',marginBottom:1, }}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
       
       
          <Text style={{ color: 'orangered', fontWeight: 'bold', fontSize: 20 }}>
           MUA 1 TẶNG 1 -
          </Text>
         
          <Text style={{ color: '#F47D02', fontWeight: 'bold', fontSize: 20,marginLeft:5, }}>
            THỨ 5 HÀNG TUẦN
          </Text>
        
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
       
       
       <Text style={{ color: '#F47D02', fontWeight: 'bold', fontSize: 15 }}>
        CUỐI TUẦN VUI VẺ -
       </Text>
       <Text style={{ color: 'orangered', fontWeight: 'bold', fontSize: 15 ,marginLeft:5,}}>
           ĐỒNG GIÁ 39K
       </Text>
     
       
     </View>
      
        
        </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hamburger HOT</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Đồ uống</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}
