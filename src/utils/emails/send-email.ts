import { sendLayerRequest } from "../../lib/send-layer-request.js";
import { EmailPayload, EmailResponse } from "../../types/email.js";

export async function sendEmail(payload: EmailPayload): Promise<EmailResponse> {
  return sendLayerRequest<EmailResponse>({
    method: "POST",
    endpoint: "/email",
    body: payload,
  });
}
