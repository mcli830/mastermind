export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchBegin = () => ({
  type: FETCH_BEGIN
})

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: { data }
})

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: { error }
})

// async fetch action for random api
const endpoint = 'https://www.random.org/integers/?num=8&min=0&max=9&col=1&base=10&format=plain&rnd=new'

// fetch doesn't handle http errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// redux-thunk middleware allows returning
// dispatch and functions in actions.
// Call this function with dispatch
// in react components (props.dispatch)
export function fetchPool() {

  return dispatch => {
    dispatch(fetchBegin());

    return fetch(endpoint)
      .then(handleErrors)
      .then(res => res.text())
      .then(text => {
        const data = text.split(/\n+/).filter(str => !!str).map(str => parseInt(str, 10))
        dispatch(fetchSuccess(data))
        return data
      })
      .catch(error => dispatch(fetchError(error)))
  }
}
