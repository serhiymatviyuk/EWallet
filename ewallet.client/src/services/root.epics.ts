import { combineEpics } from 'redux-observable'
import * as authService from './auth.service'
import * as userCardService from './cards.service'

const epicsArray = [
    ...(Object as any).values(authService),
    ...(Object as any).values(userCardService),
]

export const epics = combineEpics(...epicsArray);
