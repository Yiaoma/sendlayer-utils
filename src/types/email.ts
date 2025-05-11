export type ContactDetails = {
  name: string;
  email: string;
};

export type EmailPayload = {
  From: ContactDetails;
  To: ContactDetails[];
  Subject: string;
  ContentType: "HTML";
  HTMLContent: string;
  CC?: ContactDetails[];
  BCC?: ContactDetails[];
  ReplyTo?: ContactDetails[];
  Tags?: string[];
  Headers?: {
    "X-Mailer": string;
    "X-Test": string;
  };
  Attachments?: {
    Content: string;
    Type: string;
    Filename: string;
    Disposition: string;
    ContentId: string;
  }[];
};

export type EmailResponse = {
  MessageID: string;
};
