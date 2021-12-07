import React from 'react'
import styled from 'styled-components'

export const Button = ({ onClick, disabled, children }) => {
	return (
		<Component onClick={onClick} disabled={disabled}>
			{children}
		</Component>
	)
}

const Component = styled.button`
	background: ${({
		theme: {
			pallet: { primary },
		},
	}) => primary};
	color: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	font-size: ${({
		theme: {
			sizes: { medium },
		},
	}) => medium}px;
	border-radius: ${({
		theme: {
			borderRadius: { medium },
		},
	}) => medium}px;
	padding: 14px 16px;
	cursor: pointer;
`
