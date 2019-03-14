/**Prototype */

/**All are the actions  */
import { ADD_USER, REMOVE_USER, USERS_MESSAGES, ADD_USER_MESSAGE, DELETE_USER_MESSAGE } from './app.action';


export interface IAppStore {

}

export const INITAL_STATE: IAppStore = {

}

export function rootReducer(state: IAppStore, action): IAppStore {

    switch (action.type) {

        case ADD_USER:
            break;
        case REMOVE_USER:
            break;
        case USERS_MESSAGES:
            break;
    }
    return state;
}