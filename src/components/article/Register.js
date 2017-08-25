/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/article/register.styl'
class Register extends Component {
  render () {
    return (
      <div className="out-s">
        <div className='bg-register-s' />
        <div className='register-s'>
          <input className="register-input-s" type='text' />
          <br />
          <input className="register-input-s" type='password' />
        </div>
      </div>
    )
  }
}
export default Register
