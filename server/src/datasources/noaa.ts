import { delay } from '../utils'
import type { KpData } from '../types'

const NOAA_URL = 'https://services.swpc.noaa.gov/json/planetary_k_index_1m.json'

export async function fetchNoaaData(retries = 3): Promise<KpData[]> {
    try {
        const res = await fetch(NOAA_URL)

        if (!res.ok) {
            throw new Error(`NOAA fetch failed: ${res.statusText}`)
        }

        return res.json()
    } catch {
        if (retries > 0) {
            console.warn(
                `NOAA fetch failed, retrying in 1 minute... (${retries} retries left)`
            )
            await delay(60_000)
            return fetchNoaaData(retries - 1)
        }
        throw new Error('Failed to fetch NOAA data after multiple retries.')
    }
}
