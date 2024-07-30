import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.heading.xl,
        lineHeight: 44,
        marginTop: 42,
    },
    subtitle: {
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.gray_300,
    }
});