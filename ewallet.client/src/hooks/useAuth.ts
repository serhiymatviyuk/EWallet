import { useSelector } from 'react-redux';
import { IAuthState } from '../reducers';
import { IApplicationState } from '../reducers/application.state';

export const useAuth = () => {
    const authState = useSelector<IApplicationState, IAuthState>((state) => state.authentication);
    return authState;
}