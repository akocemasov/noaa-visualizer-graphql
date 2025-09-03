import { useQuery } from '@apollo/client/react'
import { Typography } from '@mui/material'
import { GET_NOAA_KP_DATA } from '../graphql/queries'
import ChartCard from '../components/ChartCard'
import type { GetNoaaKpDataResponse } from '../types'

export default function HomePage() {
    const { data, loading, error } =
        useQuery<GetNoaaKpDataResponse>(GET_NOAA_KP_DATA)

    if (loading) return <Typography>Loading NOAA data...</Typography>
    if (error) return <Typography>Error: {error.message}</Typography>

    return <ChartCard title='Geomagnetic Activity' data={data?.noaaKpData} />
}
