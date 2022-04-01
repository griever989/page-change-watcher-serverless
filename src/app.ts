import { EventBridgeEvent } from 'aws-lambda';
import axios from 'axios';
import { parse } from 'node-html-parser';

export const lambdaHandler = async (event : EventBridgeEvent<any, any>): Promise<void> => {
    const url = process.env.QUERY_URL || '';
    const querySelector = process.env.QUERY_SELECTOR || '';
    const res = await axios.get(url);
    const html = res.data;
    const root = parse(html);
    const match = root.querySelector(querySelector);
    if (match) {
        console.log(`Matched selector ${querySelector}`);
    } else {
        console.log(`No match for selector ${querySelector}`);
    }
};
