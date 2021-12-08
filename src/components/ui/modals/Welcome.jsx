import React from 'react'
import styled from 'styled-components'
import { Logo } from '../Logo'
import { Title } from '../Title'
import { Text } from '../Text'
import { Button } from '../buttons'
import { theme } from '../../../styles'

export const WelcomeModal = ({ onClick }) => {
	return (
		<Component>
			<Wrapper>
				<Logo width={224} height={32} />
				<Content>
					<Title>Welcome to Macaron!</Title>
					<Text size={'medium'}>
						Thanks for signing up! <br />
						We’re happy to see you here
					</Text>
				</Content>
				<Button onClick={onClick}>Let’s start</Button>
			</Wrapper>
		</Component>
	)
}

const Component = styled.div`
	background: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	width: 450px;
	padding: 90px 56px 88px;
	margin: 10px 0;
	border-radius: ${({
		theme: {
			borderRadius: { big },
		},
	}) => big}px;

	${theme.breakpoints.mobile} {
		width: 100%;
		padding: 85px 15px 88px;
	}

	${theme.breakpointsHeight.mobileS} {
		height: 100%;
	}
`

const Wrapper = styled.div`
	width: 348px;
	text-align: ${({
		theme: {
			alignItems: { center },
		},
	}) => center};
	margin: 0 auto;

	${theme.breakpoints.mobile} {
		width: 100%;
	}
`

const Content = styled.div`
	display: grid;
	grid-row-gap: 8px;
	margin: 34px 0 30px;
`
