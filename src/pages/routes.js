import { WelcomePage } from './Welcome'
import { SignInPage } from './SignIn'

export const routes = [
	{ Component: SignInPage, exact: true, path: '/signIn' },
	{ Component: WelcomePage, exact: true, path: '/welcome' },
]
