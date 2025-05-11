# sendlayer-utils

Sendlayer API utilities.

## Instalation

```bash
npm install @yiaoma/sendlayer-utils
```

## Prerequisites

- You need a Sendlayer API key. Set it as an environment variable named `SENDLAYER_API_KEY`.

## Usage

### 1. Sending an Email.

```javascript
import { sendEmail } from "@yiaoma/sendlayer-utils";

await sendEmail({
  From: { name: "Me", email: "me@example.com" },
  To: [{ name: "You", email: "you@example.com" }],
  Subject: "Hello",
  ContentType: "HTML",
  HTMLContent: "<strong>Hello world</strong>",
});
```

### 2. Fetching Webhooks

```javascript
import { getWebhooks } from "@yiaoma/sendlayer-utils";

await getWebhooks();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

[Sendlayer API Documentation](https://developers.sendlayer.com/api-reference/introduction)
