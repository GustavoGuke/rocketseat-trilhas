import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        paddingTop: 62,
        
    },
    logo: {
        width: 134,
        height: 34
    },
    form: {
        width: '100%',
        padding: 24,
        gap: 7,
        marginTop: 32
    },
    content: {
        flex:1,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        padding:24,
        marginTop: 24
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6EC',
        paddingBottom: 12,
      },
      clearButton: {
        marginLeft: 'auto',
      },
      clearText: {
        fontSize: 12,
        color: '#828282',
        fontWeight: 600,
      },
      separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#EEF0F5",
        marginVertical: 16,
      },
      listContent: {
        paddingTop: 24,
        paddingBottom: 62,
      },
      empty: {
        fontSize: 14,
        color: "#808080",
        textAlign: 'center'
      },
});

