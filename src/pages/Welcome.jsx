import React from 'react'
import { Header, MainTemplate, WelcomeModal } from '../components'

export const WelcomePage = () => {
	return (
		<MainTemplate header={<Header />}>
			<WelcomeModal />
		</MainTemplate>
	)
}
