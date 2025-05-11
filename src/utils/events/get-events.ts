import { sendLayerRequest } from "../../lib/send-layer-request.js";
import { EventsParams, EventsResponse } from "../../types/events.js";

export async function getEvents(params: EventsParams): Promise<EventsResponse> {
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );

  const queryString = new URLSearchParams(filteredParams).toString();

  const endpoint = `/events${queryString ? `?${queryString}` : ""}`;

  return sendLayerRequest<EventsResponse>({
    endpoint,
  });
}
