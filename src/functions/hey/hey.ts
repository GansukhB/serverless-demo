import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from "@libs/lambda";

const handler = (event: APIGatewayEvent): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      method: event.httpMethod,
      message: "Hello",
    }),
  };
};
export const hey = middyfy(handler);
