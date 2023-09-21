import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{width: '70%', margin: '0 auto', padding: '2rem 0'}}>
      <h2 style={{fontSize: '5rem', marginBottom: '17px', color: 'red', fontWeight: '700', textAlign: 'center'}}>404</h2>
      <h3 style={{fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '3rem'}}>UH OH! You're lost.</h3>
      <p style={{width: '60%', margin: '0 auto', fontSize: '1.5rem', fontWeight: '500', color: 'black', marginBottom: '2rem'}}>
        The page you are looking for does not exist. How you got here is a mystery.
        But you can click the button below to go back to the homepage.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
        <NavLink to="/">
          <button style={{padding: '1rem 1.5rem', backgroundColor: 'blue', borderRadius: '.5rem', cursor: 'pointer', fontSize: '16px', color: '#fff', fontWeight: '700'}}>Go Home</button>
        </NavLink>
      </div>

    </div>
  )
}

export default ErrorPage