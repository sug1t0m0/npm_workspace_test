import { Callback, Context } from "aws-lambda";
import { S3Event } from "../types/s3Event";
import fetch from "node-fetch";

export const handler = async (event: S3Event, context: Context, callback: Callback) => {

    console.log(JSON.stringify(event));

    const response = await fetch('https://github.com/');
const body = await response.text();

console.log(body);

    const res = {
        statusCode: 200,
    }

    console.log(`env: ${process.env.env}`);
};
