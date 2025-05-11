export type EventsParams = {
  StartDate?: number;
  EndDate?: number;
  Event?: string;
  StartFrom?: number;
  RetrieveCount?: number;
  MessageID?: string;
};

export type EventsResponse = {
  TotalRecords: number;
  Events: {
    Event: string;
    LoggedAt: number;
    LogLevel: string;
    Message: {
      Headers: {
        MessageId: string;
        From: string[];
        ReplyTo: object[];
        To: string[];
        Cc: object[];
        Bcc: object[];
        Subject: string;
      };
    };
    Reason: string;
    Ip: string;
    Geolocation: {
      City: string;
      Region: string;
      Country: string;
    };
  }[];
};
