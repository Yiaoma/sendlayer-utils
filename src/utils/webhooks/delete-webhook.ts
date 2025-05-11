import { sendLayerRequest } from "../../lib/send-layer-request.js";

export async function deleteWebhook({
  WebhookID,
}: {
  WebhookID: number;
}): Promise<void> {
  return sendLayerRequest<void>({
    method: "DELETE",
    endpoint: `/webhooks/${WebhookID}`,
  });
}
