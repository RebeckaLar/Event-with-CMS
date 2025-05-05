//api.js till för att kommunicera med våran backend

// import { client } from "./client"
import { sanityFetch } from "./live"
import { GET_EVENT_QUERY, GET_EVENTS_QUERY, GET_PAGE_QUERY, GET_PAGES_QUERY } from "./queries"


export const getEvents = async () => {
    // return client.fetch(GET_EVENTS_QUERY)

    //To enable live-preview when managing web content:
    const { data } = await sanityFetch({
        query: GET_EVENTS_QUERY
    })
    return data
}

export const getEventBySlug = async (slug) => {
    // return client.fetch(GET_EVENT_QUERY, {slug})
    const { data } = await sanityFetch({
        query: GET_EVENT_QUERY,
        params: { slug }
    })
    return data
}

export const getPages = async () => {
    // return client.fetch(GET_PAGES_QUERY)
    const { data } = await sanityFetch({
        query: GET_PAGES_QUERY
    })
    return data
}

export const getPageBySlug = async (slug) => {
    // return client.fetch(GET_PAGE_QUERY, { slug })
    const { data } = await sanityFetch({
        query: GET_PAGE_QUERY,
        params: { slug }
    })
    return data
}