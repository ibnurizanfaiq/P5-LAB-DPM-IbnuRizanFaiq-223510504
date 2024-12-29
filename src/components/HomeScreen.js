import React from 'react';
import { Appbar, Card, Button, Avatar } from 'react-native-paper';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Portofolio" subtitle="Selamat datang" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            title="Ibnu Rizan Faiq"
            subtitle="Frontend Developer & Backend Developer"
            left={(props) => <Avatar.Text {...props} label="IR" />}
          />
          <Card.Content>
            <Text style={styles.text}>
              Halo, saya Ibnu Rizan Faiq, seorang pengembang frontend dan backend dengan pengalaman dalam pengembangan aplikasi mobile dan web.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Detail')}>Lihat Detail</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
  card: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;
