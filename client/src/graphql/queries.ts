import { gql } from '@apollo/client'

export const GET_NOAA_KP_DATA = gql`
    query GetNoaaKpData {
        noaaKpData {
            time_tag
            kp_index
            estimated_kp
            kp
        }
    }
`
