export const heroesFetching = () => {
          return {
                    type: 'HEROES_FETCHING'
          }
}

export const heroesFetched = (heroes) => {
          return {
                    type: 'HEROES_FETCHED',
                    payload: heroes
          }
}

export const heroesFetchError = () => {
          return {
                    type: 'HEROES_FETCHING_ERROR'
          }
}

export const filtersFerhing = () => {
          return {
                    type: 'FILTERS_FETCHING'
          }
}

export const filtersFerhed = (filters) => {
          return {
                    type: 'FILTERS_FETCHED',
                    payload: filters
          }
}

export const filtersFetchError = () => {
          return {
                    type: 'FILTERS_FETCHING_ERROR'
          }
}

export const activeFilterChanged = (filter) => {
          return {
                    type: 'ACTIVE_FILTER_CHANGED',
                    payload: filter
          }
}

export const heroCreated = (hero) => {
          return {
                    type: 'HERO_CREATED',
                    payload: hero
          }
}

export const heroDeleted = (id) => {
          return {
                    type: 'HERO_DELETED',
                    payload: id
          }
}
