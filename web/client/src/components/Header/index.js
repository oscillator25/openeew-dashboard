import React from 'react'
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell'
import { Link } from 'react-router-dom'
import history from '../../history'

const _Header = ({ removeLogin }) => {
  return (
    <Header aria-label="XtressMesh Dashboard">
      <HeaderName element={Link} to="/events" prefix="XtressMesh">
        Dashboard
      </HeaderName>
      {removeLogin ? null : (
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Log in"
            style={{ color: '#f4f4f4', width: '100px' }}
            onClick={() => {
              history.push('/login')
            }}
          >
            Log In
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      )}
    </Header>
  )
}

export default _Header
