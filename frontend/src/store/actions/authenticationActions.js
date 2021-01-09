export const AUTHENTICATION_OPEN = "AUTHENTICATION_OPEN"
export const AUTHENTICATION_CLOSE = "AUTHENTICATION_CLOSE"

export const authenticationOpen = () => ({ type: AUTHENTICATION_OPEN })
export const authenticationClose = () => ({ type: AUTHENTICATION_CLOSE })