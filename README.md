# sendlayer-utils

Sendlayer API utilities.

## Instalation

```bash
npm install @yiaoma/sendlayer-utils
```

## Prerequisites

- You need a Sendlayer API key. Set it as an environment variable named `SENDLAYER_API_KEY`.

## Usage

### Email

#### Send Email

```javascript
import { sendEmail } from "@yiaoma/sendlayer-utils";

await sendEmail({
  From: {
    name: "Paulie Paloma",
    email: "paulie@example.com",
  },
  To: [
    {
      name: "Pattie Paloma",
      email: "pattie@exampledomain.com",
    },
  ],
  CC: [
    {
      name: "Pattie Paloma CC",
      email: "pattie.cc@exampledomain.com",
    },
  ],
  BCC: [
    {
      name: "Pattie Paloma BCC",
      email: "pattie.bcc@exampledomain.com",
    },
  ],
  ReplyTo: [
    {
      name: "Pattie Paloma ReplyTo",
      email: "pattie.reply@exampledomain.com",
    },
  ],
  Subject: "This is the email subject",
  ContentType: "HTML",
  HTMLContent: "<html><body><p>This is a test email!</p></body></html>",
  Tags: ["newsletter, daily"],
  Headers: {
    "X-Mailer": "test mailer",
    "X-Test": "test header",
  },
  Attachments: [
    {
      Content: "BASE 64 ENCODED STRING",
      Type: "image/png",
      Filename: "test.png",
      Disposition: "attachment",
      ContentId: "0",
    },
  ],
});
```

### Events

#### Retrieve Events

```javascript
import { getEvents } from "@yiaoma/sendlayer-utils";

await getEvents({
  StartDate: 1646901478,
  EndDate: 1646901480,
  Event: "delivered",
  StartFrom: 0,
  RetrieveCount: 20,
  MessageID: "10210a3d-7d37-4967-9c20-ad4e26016a78",
});
```

### Webhooks

#### Get Webhooks

```javascript
import { getWebhooks } from "@yiaoma/sendlayer-utils";

await getWebhooks();
```

#### Create Webhook

```javascript
import { createWebhook } from "@yiaoma/sendlayer-utils";

await createWebhook({
  Event: "delivery",
  WebhookURL: "www.example.com",
});
```

#### Delete Webhook

```javascript
import { deleteWebhook } from "@yiaoma/sendlayer-utils";

await deleteWebhook({
  WebhookID: 972,
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

[Sendlayer API Documentation](https://developers.sendlayer.com/api-reference/introduction)
