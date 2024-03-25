import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";
import { AppError } from "@utils/error/appError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";



export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {

        const storedPlayers = await playerGetByGroup(group)

        const playerAlreadyExists = storedPlayers.some(player => player.name === newPlayer.name)

        if(playerAlreadyExists) {
            console.log(playerAlreadyExists)
            throw new AppError('Jogador ja existe')
        }
        const storage = JSON.stringify([...storedPlayers, newPlayer])
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

    } catch (error) {  
        throw error 
    }

}