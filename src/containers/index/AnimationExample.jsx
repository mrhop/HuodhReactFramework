/**
 * Created by Donghui Huo on 2018/2/2.
 */
/* eslint-disable */
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './AnimationExample.css'

/* you'll need this CSS somewhere
 .fade-enter {
 opacity: 0;
 z-index: 1;
 }

 .fade-enter.fade-enter-active {
 opacity: 1;
 transition: opacity 250ms ease-in;
 }
 */

const AnimationExample = () => (
  <Router>
    <Route render={({ location }) => (
      <div style={styles.fill}>
        <Route exact path="/" render={() => (
          <Redirect to="/color/10/90/50"/>
        )}/>

        <ul style={styles.nav}>
          <NavLink to="/color/10/90/50">Red</NavLink>
          <NavLink to="/color/120/100/40">Green</NavLink>
          <NavLink to="/color/200/100/40">Blue</NavLink>
          <NavLink to="/color/310/100/50">Pink</NavLink>
        </ul>

        <div style={styles.content}>
        <TransitionGroup>
          <CSSTransition{... this.props}
    timeout={1000}
    classNames="fade"
          >
            {/* no different than other usage of
                CSSTransitionGroup, just make
                sure to pass `location` to `Route`
                so it can match the old location
                as it animates out
            */}
            <Route
              location={location}
              key={location.key}
              path="/color/:h/:s/:l"
              component={HSL}
            />
          </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )}/>
  </Router>
)

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

const HSL = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default AnimationExample
