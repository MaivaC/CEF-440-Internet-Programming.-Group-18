import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const FormComponent = () => {
    const [infoID, setInfoID] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [picture, setPicture] = useState(null);

    const handleChoosePhoto = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets) {
                setPicture(response.assets[0].uri);
            }
        });
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('InfoID', infoID);
        formData.append('Name', name);
        formData.append('Status', status);
        formData.append('Description', description);
        formData.append('Type', type);
        if (picture) {
            formData.append('picture', {
                uri: picture,
                type: '',
                name: '',
            });
        }

        fetch('https://db-hosting-sql-resq.vercel.app/api/v1/disaster/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <PaperProvider theme={DefaultTheme}>
            <View style={styles.container}>
                <Text style={styles.label}>InfoID:</Text>
                <TextInput
                    style={styles.input}
                    value={infoID}
                    onChangeText={setInfoID}
                    placeholder="Enter InfoID"
                />
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter Name"
                />
                <Text style={styles.label}>Status:</Text>
                <TextInput
                    style={styles.input}
                    value={status}
                    onChangeText={setStatus}
                    placeholder="Enter Status"
                />
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter Description"
                />
                <Text style={styles.label}>Type:</Text>
                <TextInput
                    style={styles.input}
                    value={type}
                    onChangeText={setType}
                    placeholder="Enter Type"
                />
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
                {picture && (
                    <Image
                        source={{ uri: picture }}
                        style={styles.image}
                    />
                )}
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 12,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
    },
});

export default FormComponent;
