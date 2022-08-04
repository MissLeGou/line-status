import { rest } from "msw";

export const handlers = [
  rest.get("https://api.tfl.gov.uk/Line/Mode/tube/Status", (req, res, ctx) => {
    req.url.searchParams.get("detail=true");
    return res(
      ctx.json([
        {
          id: "bakerloo",
          name: "Bakerloo",
          modeName: "tube",
          disruptions: [],
          created: "2018-03-14T17:44:30.943Z",
          modified: "2018-03-14T17:44:30.943Z",
          lineStatuses: [
            {
              id: 0,
              statusSeverity: 10,
              statusSeverityDescription: "Good Service",
              created: "0001-01-01T00:00:00",
              validityPeriods: [],
            },
          ],
          routeSections: [],
          serviceTypes: [
            {
              name: "Regular",
              uri: "/Line/Route?ids=Bakerloo&serviceTypes=Regular",
            },
          ],
          crowding: {},
        },
      ])
    );
  }),
];
