import firestore from '@react-native-firebase/firestore';



export function createUsers(userId: string | undefined,name:string, email:string, userType:string) {
    firestore()
        .collection(process.env.EXPO_PUBLIC_DATA_BASE_USERS!)
        .add({
            userId: userId,
            name: name,
            email: email,
            userType: userType,
            createdAt: firestore.FieldValue.serverTimestamp()
        })
}