import { BASE_URL } from "../constants/index.js";

interface RequestOptions {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
}

export async function sendLayerRequest<T>({
  endpoint,
  method = "GET",
  body,
}: RequestOptions): Promise<T> {
  const API_KEY = process.env.SENDLAYER_API_KEY;
  if (!API_KEY) {
    throw new Error(
      "SENDLAYER_API_KEY is not defined in the environment variables."
    );
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorBody = await response.json();
    const errorDetails =
      errorBody.Errors?.map(
        (err: { Code: number; Message: string }) =>
          `Code: ${err.Code}, Message: ${err.Message}`
      ).join("; ") || "Unknown error";

    throw new Error(
      `Sendlayer error: ${response.statusText} - ${errorDetails}`
    );
  }

  return await response.json();
}
