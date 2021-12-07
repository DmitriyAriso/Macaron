import React from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from './pages'

export const App = () => {
	return (
		<Component>
			<Switch>
				{routes.map(({ exact, path, Component }) => {
					return <Route key={path} exact={exact} path={path} render={() => <Component />} />
				})}
				<Redirect to={'/signIn'} />
			</Switch>
		</Component>
	)
}

const Component = styled.div``
