import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { courses } from '../data/StudentDb'

const Course = ({ studentData }) => {
    const studentCourse = courses.find(course => course.id === studentData.course_id);

    return (
        <View style={styles.profile}>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{studentCourse.name}</Text>
                <Text style={styles.basicInfo}>
                    code: {studentCourse.course_code}  | Dept:  {studentCourse.department}
                </Text>
            </View>

            <View style={styles.verticalLine} />

            {/* Course Information*/}
            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Course Information</Text>
                <View style={styles.infoContent}>
                    <Text style={styles.infoText}>Code: {studentCourse.course_code}</Text>
                    <Text style={styles.infoText}>Department: {studentCourse.department}</Text>
                    <Text style={styles.infoText}>Duration: {studentCourse.duration}</Text>
                    <Text style={styles.infoText}>Description: {studentCourse.description}</Text>
                </View>
            </View>
            <View style={styles.verticalLine} />
        </View>
        

    )
};

const styles = StyleSheet.create({
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
        width: '90%',
        marginLeft: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
    verticalLine: {
        width: "85%",
        backgroundColor: '#ccc',
        height: 2,
        marginHorizontal: 15,
        marginBottom: 10,
    },

    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholderImage: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
    },
    basicInfo: {
        fontSize: 20,
        color: '#666',
        marginTop: 5,
    },
    infoSection: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    infoContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 1,

    },
    infoText: {
        fontSize: 18,
        color: '#333',
        marginVertical: 1,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    subject: {
        fontSize: 18,
        color: '#000',
    },
});

export default Course;