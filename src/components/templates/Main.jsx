import React from 'react'
import styled from 'styled-components'
import { Container } from '../ui'
import { theme } from '../../styles'

export const MainTemplate = ({ header, children }) => {
	return (
		<Template>
			{header}
			<Wrapper>
				<Container>{children}</Container>
			</Wrapper>
		</Template>
	)
}

const Template = styled.div``
const Wrapper = styled.div`
	height: calc(100vh - 73px);
	background: ${({
		theme: {
			pallet: { grey },
		},
	}) => grey};

	${theme.breakpoints.mobile} {
		background: ${({
			theme: {
				pallet: { white },
			},
		}) => white};
	}
`
