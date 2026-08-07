import http from "k6/http";
import { check } from "k6";

const vus = Number(__ENV.VUS || 1);

export const options = {
  vus: vus,
  duration: "10s",
};

export default function () {
  const response = http.get("http://localhost:3000/work");

  check(response, {
    "status is 200": (r) => r.status === 200,
  });
}