
import { request, camelizeResponse, responseData } from "./request";

const baseUrl = "http://localhost:3000/v1";

const config = { withCredentials: true };

export async function getGameConfig() {
  return request.get(baseUrl + "/config/game", config)
    .then(responseData)
    .then(camelizeResponse);
}

export function getUnits() {
  return request.get(baseUrl + "/config/units", config)
    .then(responseData)
    // interestingly, don't need a camelize here.. yet
    .then((data) => data.units);
}

export function getPlanets() {
  return request.get(baseUrl + "/user/planetlist", config);
}
