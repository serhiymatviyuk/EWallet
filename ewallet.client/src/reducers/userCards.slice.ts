import { createSlice } from '@reduxjs/toolkit'
import { CardModel } from '../models'

export type IUserCardsState = {
    userCards: CardModel[],
    selectedCard?: CardModel,
    totalCards: number,
}

const UserCardsDefaultState: IUserCardsState = {
    userCards: [],
    selectedCard: undefined,
    totalCards: 0,
}

const userCardsSlice = createSlice({
    name: 'userCards',
    initialState: UserCardsDefaultState,
    reducers: {
        apiGetUserCards(state) { },
        apiCreateCard(state, action) { },
        apiUpdateCard(state, action) { },
        apiDeleteCard(state, action) { },

        setUserCards(state, action) { state.userCards = action.payload; },
        selectUserCard(state, action) { state.selectedCard = action.payload; },

        resetUserCardsStore(state) {
            return UserCardsDefaultState;
        }
    },
})

export const userCardsActions = userCardsSlice.actions
export default userCardsSlice.reducer
