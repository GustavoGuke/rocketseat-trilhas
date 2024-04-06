import { YStack, Text, XStack, Heading } from "tamagui";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

import BodySvg from "@assets/body.svg"
export function Exercise() {

    const navigation = useNavigation()
    return (
        <YStack flex={1}>
            <YStack
                paddingTop={70}
                paddingHorizontal={15}

                bg={'$gray500'}
            >
                <MaterialIcons
                    name="arrow-back"
                    size={36}
                    color="green"
                    onPress={() => navigation.goBack()}
                />

                <XStack
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    marginVertical={15}
                >
                    <Heading 
                    color={'$white'} 
                    fontSize={'$7'}
                    flexShrink={1}
                    >Puxada frontal</Heading>

                    <XStack>
                        <BodySvg/>
                        <Text
                            marginLeft={5}
                            color={'$gray200'}
                            fontSize={'$2'}
                            numberOfLines={1}
                            textTransform="capitalize"
                        >Costas</Text>
                    </XStack>
                </XStack>
            </YStack>
        </YStack>
    );
}