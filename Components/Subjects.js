import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { courses, subjects, marks } from '../data/StudentDb'

const Subjects = ({ studentData }) => {
    const studentCourse = courses.find(course => course.id === studentData.course_id);
    const courseSubject = subjects.filter(subjects => subjects.course_id === studentData.id);
    const studentMarks = marks.filter(mark => mark.student_id === studentData.id);

    const totalMarks = studentMarks.reduce((acc, mark) => acc + mark.marks, 0);
    const averageMarks = studentMarks.length > 0 ? (totalMarks / studentMarks.length).toFixed(0) : 0;

    const subjectsWithMarks = courseSubject.map(subject => {
        const mark = studentMarks.find(m => m.subject_id === subject.id);
        return {
            subjectName: subject.name,
            marks: mark ? mark.marks : 0,
        };
    });

    const ListHeaderComponent = () => (
        <>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{studentCourse.name}</Text>
                {courseSubject.length > 0 && (
                    <Text style={styles.basicInfo}>
                        {courseSubject.length} Subjects | Average  {averageMarks}
                    </Text>
                )}
            </View>

            <View style={styles.verticalLine} />

            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Marks Information</Text>
                <View style={[styles.row1, styles.headerRow]}>
                    <View style={styles.column1}>
                        <Text style={styles.headerText}>Subject</Text>
                    </View>
                    <View style={styles.column1}>
                        <Text style={styles.headerText}>Marks</Text>
                    </View>
                </View>
                <View style={styles.verticalLine1} />
            </View>
        </>
    );

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.subject}>{item.subjectName}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.marks}>{item.marks}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.profile}>
            <FlatList
                data={subjectsWithMarks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                contentContainerStyle={{ paddingBottom: 10 }}
            />
        </View>
    );
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
    verticalLine: {
        width: "80%",
        backgroundColor: '#ccc',
        height: 2,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    verticalLine1: {
        width: "95%",
        backgroundColor: '#ccc',
        height: 2,
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
        fontSize: 30,
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
    row1: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    column: {
        flex: 0,

    },
    column1: {
        flex: 1,

    },
    subject: {
        fontSize: 18,
        color: '#000',
    },
    marks: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    headerRow: {
        color: '#ddd',
        marginHorizontal: 15,
    },
    headerText: {
        fontSize: 15,
        color: '#333',
        paddingVertical: 6,
    },
});

export default Subjects;