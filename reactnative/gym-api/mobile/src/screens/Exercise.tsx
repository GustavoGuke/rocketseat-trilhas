import { YStack, Text, XStack, Heading, Image, ScrollView } from "tamagui";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

import img from '@assets/background.png'
import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"

import { Button } from "@components/Button";

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
                        <BodySvg />
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
            <ScrollView>
                <YStack padding={20}>
                    <Image
                        source={img}
                        w={"full"}
                        h={300}
                        borderRadius={8}
                        marginRight={8}
                        resizeMode="cover"
                        mb={20}
                    />
                    <YStack
                        borderRadius={8}
                        backgroundColor={"$gray500"}
                        padding={20}>
                        <XStack alignItems="center" justifyContent="space-between">
                            <XStack>
                                <SeriesSvg />
                                <Text color={"$gray200"} marginLeft={5}>3 Seção</Text>
                            </XStack>
                            <XStack>
                                <RepetitionsSvg />
                                <Text color={"$gray200"} marginLeft={5}>17 Repetição</Text>
                            </XStack>

                        </XStack>
                        <Button title="Adicionar repetições" />
                    </YStack>
                </YStack>
            </ScrollView>
        </YStack>
    );
}