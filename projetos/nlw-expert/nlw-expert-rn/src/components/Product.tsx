// create um componente Product com touchableOpacity
import { forwardRef } from "react";
import { ImageProps, TouchableOpacity, TouchableOpacityProps, Image, Text, View } from "react-native";


type ProductDataProps = {
    id: string;
    title: string;
    description: string;
    thumbnail: ImageProps;
    quantity?: number;
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
               <View className="flex-row justify-between">
                    <Text className="text-slate-100 font-subtitle text-base ">
                        {data.title}
                    </Text>

                    {
                        data.quantity &&
                        <Text className="text-lime-400 font-subtitle text-sm">
                            x  {data.quantity}
                        </Text>
                    }
               </View>

                <Text className="text-slate-400 text-xs leading-5 mt-0.5">
                    {data.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
)