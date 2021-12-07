import React from 'react'
import styled from 'styled-components'
import { LogoImage } from '../../assets'

export const Logo = ({ width = 140, height = 20 }) => {
	return <Component src={LogoImage} width={width} height={height} />
}

const Component = styled.img`
	height: ${({ height }) => height}px;
	width: ${({ width }) => width}px;
`
