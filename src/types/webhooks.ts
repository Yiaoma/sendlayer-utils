export type Webhook = {
  WebhookID: string;
  CreatedAt: string;
  UpdatedAt: string;
  Status: string;
  WebhookURL: string;
  Event: string;
  LastResponseCode: string;
  LastResponseBody: string;
  LastResponseAt: string;
  LastResponseTryCounter: string;
};

export type WebhookPayload = {
  Event: string;
  WebhookURL: string;
};

export type WebhookResponse = {
  NewWebhookID: number;
};
