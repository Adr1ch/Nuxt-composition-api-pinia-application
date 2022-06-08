/**
 * 
 *
 * onRequest(config)
   onResponse(response)
   onError(err)
   onRequestError(err)
   onResponseError(err)
 */

export default function ({ $axios, error, redirect }) {
  $axios.onError((err) => {
    console.log('OnError-Error')
    const checkErrorResponse = err.response || err
    const checkErrorStatus =
      err.response && err.response.status ? err.response.status : 500
    error({ statusCode: checkErrorStatus, message: checkErrorResponse })
    if (error.response.status === 500) {
      // redirect('/sorry')
    }
  })

  // eslint-disable-next-line node/handle-callback-err
  $axios.onResponseError((err) => {
    // console.log('OnResponseError-Error')
  })

  $axios.onRequestError((error) => {
    if (error.response.status === 500) {
      // redirect('/sorry')
    }
  })

  $axios.onRequest((response) => {
    // console.log('Success')
  })

  $axios.onResponse((response) => {
    // console.log('Success')
  })
}
