import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfileForm = () => {
  const renderProfileItem = (label, value) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="edit" size={16} color="#990000" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderProfileItem('NAME', 'Your Name')}
      {renderProfileItem('AGE', 'Your Age')}
      {renderProfileItem('E-MAIL', 'Your E-mail')}
      {renderProfileItem('PHONE NUMBER', 'Your Phone Number')}
      {renderProfileItem('SEX', 'Your Sex')}
      {renderProfileItem('REGION', 'Your Region')}
      {renderProfileItem('CITY', 'Your City')}
      {renderProfileItem('STAKEHOLDER STATUS', 'Your Status')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  editButton: {
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
  },
});

export default UserProfileForm;
