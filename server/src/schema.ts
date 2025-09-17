import { fetchNoaaData } from './datasources/noaa'
import type { KpData } from './types'

export const typeDefs = `#graphql
    type KpData {
        time_tag: String
        kp_index: Int
        estimated_kp: Float
        kp: String
    }

    type Query {
        noaaKpData: [KpData]
    }
`

export const resolvers = {
    Query: {
        noaaKpData: async (): Promise<KpData[]> => {
            return fetchNoaaData()
        },
    },
}
