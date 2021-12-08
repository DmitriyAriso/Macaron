import React from 'react'
import { Header, MainTemplate, WelcomeModal } from '../components'
import { AvatarIcon } from '../assets'
import styled from 'styled-components'
import { theme } from '../styles'

export const WelcomePage = () => {
	return (
		<MainTemplate header={<Header avatar={AvatarIcon} />}>
			<Page>
				<WelcomeModal />
			</Page>
		</MainTemplate>
	)
}

const Page = styled.div`
	display: flex;
	align-items: center;
	height: calc(100vh - 74px);

	${theme.breakpointsHeight.mobile} {
		height: 100%;
	}
`
