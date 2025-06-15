export type RootStackParamList = {
    Home: undefined;
    Product: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}