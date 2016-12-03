import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'

export const loginActionSuccess = (jwt) => ({
  type: 'LOGIN_SUCCESS',
  token: jwt
})

export const loginActionFail = () => ({
  type: 'LOGIN_FAIL',
  token: null
})

function login (email, pass) {
  return function (dispatch) {
    return newFetch('POST', false, '/api/v1/knock/auth_token', {
      auth: {
        email: email,
        password: pass
      }
    })
    .then(response => response.json())
    .then(json => {
      notify.show('Login Success!', 'success', 2000)
      dispatch(loginActionSuccess(json.jwt))
    }).catch(error => {
      dispatch(loginActionFail())
      notify.show('Login Fail.. Use qq@qq.com/12345678', 'error', 2000)
    })
  }
}

export default login
