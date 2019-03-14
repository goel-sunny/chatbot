/**Prototype */

/**All are the actions  */
import { ADD_USER, REMOVE_USER, USERS_MESSAGES, ADD_USER_MESSAGE, DELETE_USER_MESSAGE } from './app.action';
import { UserDetails } from '../shared/data/user-details.interface';
import { UserFriendList } from '../shared/data/user-friendlist.interface';


export interface IAppStore {
    userDetails: any;
    userFriendList: UserFriendList[]
}

export const INITIAL_STATE: IAppStore = {
    userDetails: {},
    userFriendList: []
};

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