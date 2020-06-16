import axios from 'axios'
import * as appCredentials from './app-credentials'

import {
  R_CAPTCHA,
  R_ERROR_INVALID_CODE,
  R_ERROR_INVALID_CREDENTIALS,
  R_ERROR_UNKNOWN,
  R_REQUIRE_2FA,
  R_SUCCESS
} from './auth-constants'

export default async function auth(
  credentials: object,
  app: keyof typeof appCredentials = 'android'
) {
  const apiUrl = 'https://oauth.vk.com/token'

  const appParams = {
    grant_type: 'password',
    client_id: appCredentials[app][0],
    client_secret: appCredentials[app][1],
    v: 5.103,
    '2fa_supported': 1
  }

  let json

  try {
    json = await axios
      .get(apiUrl, {
        params: {
          ...appParams,
          ...credentials
        }
      })
      .then((res) => res.data)
  } catch (error) {
    if (error.response) {
      json = error.response.data
    } else {
      throw error
    }
  }

  if (json.error) {
    switch (json.error) {
      case 'need_captcha':
        return {
          status: R_CAPTCHA,
          ...credentials,
          sid: json.captcha_sid,
          img: json.captcha_img
        }
      case 'need_validation':
        if (json.validation_type && json.validation_type.startsWith('2fa')) {
          return {
            status: R_REQUIRE_2FA,
            type: json.validation_type,
            phone: json.phone_mask,
            ...credentials
          }
        } else {
          return { status: R_ERROR_UNKNOWN, ...credentials }
        }
      case 'invalid_client':
        return {
          status:
            json.error_type === 'username_or_password_is_incorrect'
              ? R_ERROR_INVALID_CREDENTIALS
              : R_ERROR_UNKNOWN,
          ...credentials
        }

      case 'invalid_request':
        return {
          status:
            json.error_type === 'otp_format_is_incorrect'
              ? R_ERROR_INVALID_CODE
              : R_ERROR_UNKNOWN,
          ...credentials
        }

      default:
        return { status: R_ERROR_UNKNOWN, ...credentials }
    }
  } else {
    return {
      status: R_SUCCESS,
      ...credentials,
      token: json.access_token,
      user_id: json.user_id
    }
  }
}