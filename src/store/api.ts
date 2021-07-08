
import { request, camelizeResponse, responseData } from "./request";
import { GameConfiguration } from "@/models";

const baseUrl = "/v1";
// const baseUrl = "http://localhost:3000/v1";

const config = { withCredentials: true };

let configCache: Promise<GameConfiguration>;

async function getConfig() {
  if (configCache) {
    return configCache;
  }
  configCache = request.get(baseUrl + "/config", config)
    .then(responseData)
    .then(camelizeResponse);
  return configCache;
}

export async function getGameSpeed() {
  return getConfig()
  .then((configuration) => configuration.speed);
}

export async function getStartConfiguration() {
  return getConfig()
  .then((configuration) => configuration.start);
}

export function getUnits() {
  return getConfig()
  .then((configuration) => configuration.units);
}

export function getPlanets() {
  return request.get(baseUrl + "/user/planetlist", config);
}
