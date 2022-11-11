import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Tab} from '@rneui/themed';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const App = () => {
  const [index, setIndex] = React.useState(0);


  return (
    <ScrollView>
      <View>
        <Text style={styles.Titulo}>Historiales</Text>
      </View>
      <View>
        <Tab
          value={index}
          onChange={setIndex}
          indicatorStyle={{
            backgroundColor: '#653f90',
            height: 3,
          }}
          iconPosition="left"
          dense>
          <Tab.Item titleStyle={{color: '#653f90'}}>Pedidos</Tab.Item>
          <Tab.Item titleStyle={{color: '#653f90'}}>Servicios</Tab.Item>
        </Tab>
      </View>

      <Card title="HELLO WORLD">
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>ID 0123456</Text>
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Fecha:28/08/2022</Text>
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Total:280.000</Text>
        <Button
          buttonStyle={{
            backgroundColor: '#653f90',
            height:38,
            width:180,
            borderRadius:10
          }}
          title="Ver resumen"
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Titulo: {
    color: '#271938',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40,
  },

  Tabs: {
    color: '#653f90',
  },
});

export default App;
