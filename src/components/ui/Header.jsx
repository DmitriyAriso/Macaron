import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

export const Header = ({ avatar }) => {
	return (
		<Component>
			<Logo />
			<Avatar src={avatar} />
		</Component>
	)
}

const Component = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	padding: 24px 32px 14px 34.5px;
`

const Avatar = styled.img``
