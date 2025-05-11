import { sendLayerRequest } from "../../lib/send-layer-request.js";
import { WebhookResponse, WebhookPayload } from "../../types/webhooks.js";

export async function createWebhook(
  payload: WebhookPayload
): Promise<WebhookResponse> {
  return sendLayerRequest<WebhookResponse>({
    method: "POST",
    endpoint: "/webhooks",
    body: payload,
  });
}
