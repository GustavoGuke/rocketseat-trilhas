import { ReactNode, ReactElement } from "react";
import { CityProvider } from "@contexts/CityContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RenderOptions, render } from "@testing-library/react-native";

function Providers({ children }: { children: ReactNode }) {
    return (
        <SafeAreaProvider>
            <CityProvider>
                {children}
            </CityProvider>
        </SafeAreaProvider>
    )
}

const customerRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: Providers, ...options})

export * from '@testing-library/react-native'
export {customerRender as render, Providers}