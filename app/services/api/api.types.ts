/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
