import React from 'react'
import { Header, MainTemplate } from '../components'
import { SignIn } from '../features'
import { AvatarIcon } from '../assets'
import styled from 'styled-components'
import { theme } from '../styles'

export const SignInPage = () => {
	return (
		<MainTemplate header={<Header avatar={AvatarIcon} />}>
			<Page>
				<SignIn />
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
