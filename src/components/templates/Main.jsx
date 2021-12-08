import React from 'react'
import styled from 'styled-components'
import { Container } from '../ui'
import { theme } from '../../styles'

export const MainTemplate = ({ header, children }) => {
	return (
		<Template>
			{header}
			<Wrapper>{children}</Wrapper>
		</Template>
	)
}

const Template = styled.div``
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
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

	${theme.breakpoints.mobile} {
		background: ${({
			theme: {
				pallet: { white },
			},
		}) => white};
	}
`
