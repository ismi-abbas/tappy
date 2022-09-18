/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Avatar,
  View,
  Button,
  Image,
} from 'native-base';

const App = () => {
  const [password, setPassword] = useState('');

  return (
    <NativeBaseProvider>
      <View>
        <Box alignItems="center" marginTop="4">
          <Image
            source={{
              uri: 'DP_Small_Size.jpg',
            }}
            alt="Alternate Text"
            size="xs"
          />
          <Text fontSize="xs">Maybank Tappy</Text>
        </Box>

        <Box alignItems="center">
          <Box w="100%" maxWidth="300px" alignItems="center">
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>PFID</FormControl.Label>
                <Input type="text" borderColor="coolGray.900" />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Please enter correct PFID
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>

            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="text"
                  value={password}
                  borderColor="coolGray.900"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Please enter correct PFID
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <Button
              w="90%"
              marginTop="4"
              colorScheme="indigo"
              borderRadius={'full'}
              onPress={() => {
                console.log(password);
              }}>
              Login
            </Button>
          </Box>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
