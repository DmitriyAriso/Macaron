import React from 'react'
import { FormIntroduction, SignInForm } from '../../components'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { theme } from '../../styles'

export const SignIn = () => {
	const history = useHistory()
	const onClick = () => () => {
		history.push('/welcome')
	}
	return (
		<Component>
			<FormIntroduction />
			<SignInForm onClick={onClick} />
		</Component>
	)
}

const Component = styled.div`
	display: grid;
	grid-template-columns: 484px 434px;
	box-shadow: ${({ theme: { shadows: dialog } }) => dialog};
	margin: 10px 0;
	${theme.breakpoints.tablet} {
		grid-template-columns: 1fr;
	}

	${theme.breakpoints.mobile} {
		width: 100%;
	}
`
