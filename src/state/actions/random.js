import { glyphDictionary } from '../../lib/glyph'

export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchBegin = () => ({
  type: FETCH_BEGIN
})

export const fetchSuccess = ({pool, sequence}) => ({
  type: FETCH_SUCCESS,
  payload: { pool, sequence }
})

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: { error }
})

// async fetch action for random api
const endpoint = `https://www.random.org/integers/?num=8&min=0&max=${glyphDictionary.length-1}&col=1&base=10&format=plain&rnd=new`

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
export function fetchRandomApi() {

  return dispatch => {
    dispatch(fetchBegin());

    return fetch(endpoint)
      .then(handleErrors)
      .then(res => res.text())
      .then(text => {
        const numbers = text.split(/\n+/).filter(str => !!str).map(str => parseInt(str, 10))
        const sequence = numbers.slice(0,4)
        const pool = []
        while(numbers.length > 0) {
          let next = Math.floor(Math.random()*numbers.length)
          pool.push(numbers.splice(next, 1)[0])
        }
        dispatch(fetchSuccess({
          pool,
          sequence
        }))
        return { pool, sequence }
      })
      .catch(error => dispatch(fetchError(error)))
  }
}
