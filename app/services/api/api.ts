/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import { ChatSnapshotIn } from "../../models/Chat"
import { ChatRoomSnapshotIn } from "../../models/ChatRoom"
import type { ApiConfig } from "./api.types"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: "https://60bb189342e1d00017620480.mockapi.io/",
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getChatRooms(): Promise<
    { kind: "ok"; chatRooms: ChatRoomSnapshotIn[] } | GeneralApiProblem
  > {
    // make the api call
    const response: any = await this.apisauce.get(`/api/Room`)
    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data
      // console.log(response.data)

      // This is where we transform the data into the shape we expect for our MST model.
      const chatRooms: ChatRoomSnapshotIn[] = rawData.map((raw) => ({
        ...raw,
      }))

      return { kind: "ok", chatRooms }
    } catch (e) {
      return { kind: "bad-data" }
    }
  }

  async getChats(id): Promise<{ kind: "ok"; chats: ChatSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response: any = await this.apisauce.get(`api/Room/${id}/Message/`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data
      // This is where we transform the data into the shape we expect for our MST model.
      const chats: ChatSnapshotIn[] = rawData.map((raw) => ({
        ...raw,
      }))
      return { kind: "ok", chats }
    } catch (e) {
      return { kind: "bad-data" }
    }
  }

  async createChatRoom(name): Promise<{ kind: "ok"; response: string } | GeneralApiProblem> {
    // make the api call
    const response: any = await this.apisauce.post(`api/Room/`, { name })

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      // This is where we transform the data into the shape we expect for our MST model.

      return { kind: "ok", response }
    } catch (e) {
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
