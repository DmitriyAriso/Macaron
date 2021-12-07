import React from 'react'
import { Header, MainTemplate } from '../components'
import { SignIn } from '../features'

export const SignInPage = () => {
	return (
		<MainTemplate header={<Header />}>
			<SignIn />
		</MainTemplate>
	)
}
