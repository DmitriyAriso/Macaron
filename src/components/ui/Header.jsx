import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

export const Header = () => {
	return (
		<Component>
			<Logo />
		</Component>
	)
}

const Component = styled.header`
	background: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	padding: 24px 32px 24px 34.5px;
`
