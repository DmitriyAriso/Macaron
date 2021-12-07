import React from 'react'
import styled from 'styled-components'

export const HighlightText = ({ color, children, weight }) => {
	return (
		<Component color={color} weight={weight}>
			{children}
		</Component>
	)
}

const Component = styled.span`
	color: ${({ theme: { pallet }, color }) => pallet[color]};
	font-weight: ${({ theme: { weights }, weight }) => weights[weight]};
`
