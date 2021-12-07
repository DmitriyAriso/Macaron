import React from 'react'
import styled from 'styled-components'
import { ButtonWithIcon } from '../buttons'
import { FacebookIcon, GoogleIcon, MailIcon } from '../../../assets'
import { Title } from '../Title'
import { HighlightText } from '../HighlightText'
import { Text } from '../Text'
import { theme } from '../../../styles'

export const SignInForm = ({ onClick }) => {
	return (
		<Form>
			<Content>
				<Title>Sign In</Title>
				<Text>
					Don’t have an account?{' '}
					<HighlightText color={'primary'} weight={'bold'}>
						Sign up
					</HighlightText>
				</Text>
			</Content>
			<Buttons>
				<ButtonWithIcon icon={GoogleIcon} content={'Continue with Google'} onClick={onClick('google')} />
				<ButtonWithIcon icon={FacebookIcon} content={'Continue with Facebook'} onClick={onClick('facebook')} />
				<ButtonWithIcon icon={MailIcon} content={'Continue with Facebook'} onClick={onClick('mail')} />
			</Buttons>
		</Form>
	)
}

const Form = styled.div`
	background: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	padding: 60px 60px 94px 60px;
	border-radius: ${({
		theme: {
			borderRadius: { big },
		},
	}) => `${0}px ${big}px ${big}px ${0}px`};

	${theme.breakpoints.tablet} {
		width: 434px;
		border-radius: ${({
			theme: {
				borderRadius: { big },
			},
		}) => `${big}px ${big}px ${big}px ${big}px`};
	}

	${theme.breakpoints.mobile} {
		padding: 0 32px;
		width: 100%;
	}
`
const Buttons = styled.div`
	display: grid;
	grid-row-gap: 12px;
	margin-top: 24px;
`

const Content = styled.p`
	display: grid;
	grid-row-gap: 4px;
`
