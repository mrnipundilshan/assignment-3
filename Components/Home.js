import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Profile from './Profile';
import Course from './Course';
import Subjects from './Subjects';

const Home = ({ navigation, route }) => {
  const { studentData } = route.params || {};
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile studentData={studentData} />;
      case 'course':
        return <Course studentData={studentData} />;
      case 'subjects':
        return <Subjects studentData={studentData} />;
      default:
        return <Profile studentData={studentData} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.header_text}>
          <Text style={styles.header_text_content}>UoV Student Care</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Logo/UoV_Logo.png')}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {/* Dynamic Content */}
        
        {renderContent()}
       
      </ScrollView>
      {activeTab !== 'profile' && (
        <View style={styles.footer_text}>
          <Text style={styles.footer_text_content}>UOV {'\u00A9'} 2024</Text>
        </View>
      )}

  {/* Bottom Navigation Footer */ }
  < View style = { styles.footer } >
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => setActiveTab('profile')}
        >
          <Ionicons
            name={activeTab === 'profile' ? "person" : "person-outline"}
            size={24}
            color={activeTab === 'profile' ? '#4b0150' : '#4b0150'}
          />
          <Text style={[styles.footerText, activeTab === 'profile' && { color: '#4b0150' }]}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => setActiveTab('course')}
        >
          <Ionicons
            name={activeTab === 'course' ? "school" : "school-outline"}
            size={24}
            color={activeTab === 'course' ? '#4b0150' : '#4b0150'}
          />
          <Text style={[styles.footerText, activeTab === 'course' && { color: '#4b0150' }]}>
            Course
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => setActiveTab('subjects')}
        >
          <Ionicons
            name={activeTab === 'subjects' ? "book" : "book-outline"}
            size={24}
            color={activeTab === 'subjects' ? '#4b0150' : '#4b0150'}
          />
          <Text style={[styles.footerText, activeTab === 'subjects' && { color: '#4b0150' }]}>
            Subjects
          </Text>
        </TouchableOpacity>
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4b0150',
    height: 60,
    paddingHorizontal: 10,
  },
  header_text: {
    backgroundColor: '#4b0150',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  footer_text: {
    backgroundColor: '#4b0150',
    width: '90%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 20,
  },
  footer_text_content: {
    color: '#fff',
    fontSize: 12,
    flex: 1,
    marginTop:5,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  header_text_content: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
  profile: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    width: '85%',
    marginLeft: 30,
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
  },
  scrollView: {
    flex: 1,
  },
 
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  placeholderImage: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#4b0150',
    marginTop: 4,
    fontSize: 12,
  },
});

export default Home;
