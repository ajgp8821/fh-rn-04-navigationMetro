import { AuthState } from './AuthContext'

type AuthAction = {type: 'SignIn'}

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
	
	switch (action.type) {
	case 'SignIn':
		return {
			...state,
			isLoggedIn: true,
			userName: 'no-username-yet'
		}
	default:
		return state
	}
  
}
