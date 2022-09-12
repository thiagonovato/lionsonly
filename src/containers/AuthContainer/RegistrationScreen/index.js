import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RegistrationView from './RegistrationView';

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const onPressUploadImage = async () => {
    let options = {
      title: 'Select a Photo',
      maxWidth: 200,
      maxLength: 200,
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // await launchCamera();

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Cancelled');
      } else if (response.error) {
        console.log('Error camera:', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  return (
    <RegistrationView
      setFirstName={setFirstName}
      setLastName={setLastName}
      setUsername={setUsername}
      setPassword={setPassword}
      profileImage={profileImage}
      onPressUploadImage={onPressUploadImage}
      goBack={() => navigation.navigate('Login')}
    />
  );
};

export default RegistrationScreen;
