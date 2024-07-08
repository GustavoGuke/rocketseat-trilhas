import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

import { useTheme } from 'styled-components/native';

export const TextLinearGradient = () => {
    const { COLORS } = useTheme()
    return (
        <MaskedView
            style={{ flex: 1, flexDirection: 'row', height: '100%' }}
            maskElement={
                <View
                    style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        RealceNutri

                    </Text>

                </View>
            }
        >
            {/* Shows behind the mask, you can put anything here, such as an image */}
            <View style={{ flex: 1, height: '100%', backgroundColor: COLORS.ESMERALDA_700 }} />
            <View style={{ flex: 1, height: '100%', backgroundColor:  COLORS.ESMERALDA_300 }} />
            <View style={{ flex: 1, height: '100%', backgroundColor:  COLORS.ORANGE_400 }} />
            <View style={{ flex: 1, height: '100%', backgroundColor:  COLORS.ORANGE_300 }} />
        </MaskedView>
    );
}

