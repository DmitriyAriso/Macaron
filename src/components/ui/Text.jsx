import React from 'react'
import styled from 'styled-components'

export const Text = ({ children, size = 'medium' }) => {
	return <Component size={size}>{children}</Component>
}

const Component = styled.p`
	font-size: ${({ theme: { sizes }, size }) => sizes[size]}px;
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
`
