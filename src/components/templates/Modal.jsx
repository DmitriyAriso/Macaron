import React from 'react'
import styled from 'styled-components'

export const ModalTemplate = ({ children }) => {
	return <Template>{children}</Template>
}

const Template = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
