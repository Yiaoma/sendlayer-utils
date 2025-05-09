import { BASE_URL } from "../constants";
import { SendEmailPayload, SendEmailResponse } from "../types/email";

/**
 *
 * @param payload - Email contents and metadata
 * @returns The message ID from Sendlayer.
 */
export async function sendEmail(
  payload: SendEmailPayload
): Promise<SendEmailResponse> {
  const API_KEY = process.env.SENDLAYER_API_KEY;
  if (!API_KEY) {
    throw new Error(
      "SENDLAYER_API_KEY is not defined in the environment variables."
    );
  }

  const response = await fetch(`${BASE_URL}/email`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
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

  return (await response.json()) as SendEmailResponse;
}
