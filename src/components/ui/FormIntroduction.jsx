import React from 'react'
import styled from 'styled-components'
import { BackgroundImage } from '../../assets'
import { Logo } from './Logo'
import { theme } from '../../styles'

export const FormIntroduction = () => {
	return (
		<Component>
			<Box>
				<Background src={BackgroundImage} />
				<Content>
					<Logo />
					<Text>Start creating kid stories</Text>
				</Content>
			</Box>
		</Component>
	)
}

const Background = styled.img`
	display: block;
	position: absolute;
	border-top-left-radius: ${({
		theme: {
			borderRadius: { big },
		},
	}) => big}px;
	border-bottom-left-radius: ${({
		theme: {
			borderRadius: { big },
		},
	}) => big}px;
	z-index: 2;
`

const Component = styled.div`
	${theme.breakpoints.tablet} {
		display: none;
	}
`

const Box = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
	width: 486px;
	height: 100%;
`

const Content = styled.div`
	position: absolute;
	z-index: 3;
	top: 64px;
	left: 60px;
	width: 100%;
`

const Text = styled.p`
	position: absolute;
	color: ${({
		theme: {
			pallet: { white },
		},
	}) => white};
	font-size: ${({
		theme: {
			sizes: { huge },
		},
	}) => huge}px;
`
