import React from 'react';
import { Appbar, Card } from 'react-native-paper';
import { ScrollView, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Detail Portofolio" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.heading}>Pengalaman Kerja</Text>
            <Text>- Frontend Developer di XYZ Corp</Text>
            <Text>- Backend Developer di ABC Ltd</Text>
            <Text style={styles.heading}>Proyek</Text>
            <Text>- Aplikasi E-Commerce</Text>
            <Text>- Sistem Manajemen Gudang</Text>
            <Text>- Platform Analisis Data</Text>
          </Card.Content>
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
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default DetailScreen;
