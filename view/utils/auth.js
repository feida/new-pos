import Cookies from 'js-cookie'

const TokenKey = 'Pos-Exe-Token';
const shopDet = 'shopDet';
//Cookies
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getCookie(str) {
  return Cookies.get(str)
}


export function setCookie(str,token) {
  return Cookies.set(str, token)
}

//Session
export function setSessionToken(token) {
    return sessionStorage.setItem(TokenKey,token)
}

export function getSessionToken() {
    return sessionStorage.getItem(TokenKey)
}

export function removeSessionToken() {
    return sessionStorage.removeItem(TokenKey)
}
export function removeSessionClear() {
    return sessionStorage.clear()
}
export function setSession(str,token) {
    return sessionStorage.setItem(str,token)
}
export function getSession(str) {
    return sessionStorage.getItem(str)
}


export function setSessionShopDet(shopDetail) {
  return sessionStorage.setItem(shopDet,shopDetail)
}

export function getSessionShopDet() {
  return sessionStorage.getItem(shopDet)
}