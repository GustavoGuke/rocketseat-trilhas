// create um componente Product com touchableOpacity
import { forwardRef } from "react";
import { ImageProps, TouchableOpacity, TouchableOpacityProps, Image, Text, View } from "react-native";


type ProductDataProps = {
    id: string;
    title: string;
    description: string;
    thumbnail: ImageProps;
}

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {
    return (
        <TouchableOpacity
            ref={ref}
            className="w-full flex-row items-center pb-4"
            {...rest}
        >
            <Image
                source={data.thumbnail}
                className="w-16 h-16 rounded-md"
            />
            <View className="ml-3 flex-1">
                <Text className="text-slate-100 font-subtitle text-base flex-1">
                    {data.title}
                </Text>
                <Text className="text-slate-400 text-xs leading-5 mt-0.5">
                    {data.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
)