import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {React, useState} from 'react';
import {
  NativeBaseProvider,
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  View,
  Button,
  Image,
  Toast,
} from 'native-base';

const Home = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username) {
      Toast.show({
        description: 'Please input a valid PFID',
      });
    } else if (!password) {
      Toast.show({
        description: 'Please input a valid password',
      });
    } else {
      navigation.navigate('Team');
      console.log(username, password);
    }
  };

  return (
    <NativeBaseProvider>
      <View>
        <Box alignItems="center" marginTop="4">
          <Image
            source={require('../assets/images/maybank.jpg')}
            alt="Alternate Text"
            size="sm"
          />
          <Text
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: 20,
            }}>
            Maybank Tappy
          </Text>
        </Box>

        <Box alignItems="center">
          <Box w="100%" maxWidth="300px" alignItems="center">
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>PFID</FormControl.Label>
                <Input
                  type="text"
                  value={username}
                  onChangeText={setUsername}
                />
              </Stack>
            </FormControl>

            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="text"
                  value={password}
                  onChangeText={setPassword}
                />
              </Stack>
            </FormControl>
            <Button
              w="90%"
              marginTop="4"
              colorScheme="yellow"
              borderRadius={'full'}
              onPress={() => handleLogin()}>
              Login
            </Button>
          </Box>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;
