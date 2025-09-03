export interface KpData {
    time_tag: string
    kp_index: number
    estimated_kp: number
    kp: string
}

export interface GetNoaaKpDataResponse {
    noaaKpData: KpData[]
}
