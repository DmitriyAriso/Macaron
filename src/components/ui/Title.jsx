import React from 'react'
import styled from 'styled-components'

export const Title = ({ children }) => {
	return <Component>{children}</Component>
}

const Component = styled.h3`
	color: ${({
		theme: {
			pallet: { dark },
		},
	}) => dark};
	font-weight: ${({
		theme: {
			weights: { bold },
		},
	}) => bold};
	font-size: ${({
		theme: {
			sizes: { extraBig },
		},
	}) => extraBig}px;
`
