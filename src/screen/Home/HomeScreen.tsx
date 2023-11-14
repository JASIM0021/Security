import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log('width, height', width, height);

const features = [
  {
    title: 'Secure Your Device',
    image: require('../../assets/icons/lock.png'),
    children: [
      {
        image: require('../../assets/icons/shutdown.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
    ],
  },
  {
    title: 'Protect YourSelf',
    image: require('../../assets/icons/shield.png'),
    children: [
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
      {
        image: require('../../assets/icons/shield.png'),
        title: 'fake Shutdown',
        subTitle:
          'Simulate a shutdown on your phone. Track your Location & more while the device is off',
      },
    ],
  },
];

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.gray['100'],
      }}>
      <VStack
        space={4}
        alignItems="center"
        divider={<Divider backgroundColor={'white'} h={'px'} />}
        py={'4'}
        backgroundColor={theme.colors.green['600']}
        borderRadius={10}
        mx={15}
        shadow={'4'}
        my={15}>
        <HStack alignItems={'center'} space={2} px={'16'}>
          <Image
            size={100}
            borderRadius={100}
            source={require('../../assets/icons/shield.png')}
          />
          <Text fontSize={'lg'}>
            Unlock Real-time protection in Just Few Steps
          </Text>
        </HStack>
        <VStack px={'12'}>
          <Text fontSize={'lg'}>
            Security is EveryThing And This is Your Future Security App{' '}
          </Text>
        </VStack>
        <Pressable
          w="64"
          h="20"
          bg="indigo.700"
          rounded="md"
          shadow={3}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text fontSize={'lg'}>Get Started</Text>
        </Pressable>
      </VStack>

      {features.map((feature, index) => (
        <>
          <HStack mx={15} shadow={'4'} alignItems={'center'} space={4}>
            <Image size={30} borderRadius={100} source={feature.image} />
            <Text color={'blue.900'} fontSize={'lg'}>
              {feature.title}
            </Text>
          </HStack>
          <VStack space={4} py={'4'} borderRadius={10} mx={15} key={index}>
            {feature.children.map((item, index) => (
              <HStack
                borderWidth={0.5}
                shadow={5}
                key={index}
                px={'4'}
                h={'24'}
                px={'2'}
                borderRadius={10}
                alignItems={'center'}
                backgroundColor={theme.colors.green['100']}>
                <Image size={30} borderRadius={100} source={item.image} />
                <VStack px={'2'}>
                  <Text color={'black.800'} fontSize={'lg'}>
                    {item.title}
                  </Text>
                  <Text color={'blue.900'} fontSize={'sm'}>
                    {item.subTitle}
                  </Text>
                </VStack>

                <AntDesign name="arrowright" size={20} color={'black'} />
              </HStack>
            ))}
          </VStack>
        </>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
