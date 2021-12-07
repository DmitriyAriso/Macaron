import React from 'react'
import styled from 'styled-components'

export const ButtonWithIcon = ({ content, icon, onClick }) => {
	return (
		<Button onClick={onClick}>
			<Icon src={icon} />
			<Text>{content}</Text>
		</Button>
	)
}

const Button = styled.button`
	display: flex;
	grid-column-gap: 14px;
	padding: 13px 19px;
	align-items: ${({
		theme: {
			alignItems: { center },
		},
	}) => center};
	border-radius: ${({
		theme: {
			borderRadius: { medium },
		},
	}) => medium}px;
	border: 1px solid
		${({
			theme: {
				pallet: { primaryTransparent },
			},
		}) => primaryTransparent};
	font-weight: ${({
		theme: {
			weights: { semiBold },
		},
	}) => semiBold};
	color: ${({
		theme: {
			pallet: { medium },
		},
	}) => medium};
	width: 100%;
	cursor: pointer;
`

const Icon = styled.img`
	width: 24px;
	height: 24px;
`
const Text = styled.p`
	font-size: ${({
		theme: {
			sizes: { medium },
		},
	}) => medium}px;
`
