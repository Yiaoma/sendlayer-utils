import { sendLayerRequest } from "../../lib/send-layer-request.js";
import { Webhook } from "../../types/webhooks.js";

export async function getWebhooks(): Promise<Webhook[]> {
  return sendLayerRequest<Webhook[]>({
    endpoint: "/webhooks",
  });
}
