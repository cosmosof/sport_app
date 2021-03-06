export function playersFetchHasErrored(bool) {
  return {
    type: 'PLAYERS_FETCH_HAS_ERRORED',
    hasErrored: bool,
  }
}
export function playersIsLoading(bool) {
  return {
    type: 'PLAYERS_IS_LOADING',
    isLoading: bool,
  }
}
export function itemsFetchDataSuccess(items) {
  return {
    type: 'PLAYERS_FETCH_DATA_SUCCESS',
    items,
  }
}
export function searchTerm(value) {
  return {
    type: 'SEARCH_TERM',
    value,
  }
}
export function filterTerm(value) {
  return {
    type: 'FILTER_TERM',
    value,
  }
}
export function playersFetchData(url) {
  return dispatch => {
    dispatch(playersIsLoading(true))

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(playersIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(players => {
        return dispatch(itemsFetchDataSuccess(players.players))
      })
      .catch(() => dispatch(playersFetchHasErrored(true)))
  }
}
