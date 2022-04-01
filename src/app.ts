import { EventBridgeEvent } from 'aws-lambda';
import axios from 'axios';
import { parse } from 'node-html-parser';

export const lambdaHandler = async (event : EventBridgeEvent<any, any>): Promise<void> => {
    const url = process.env.QUERY_URL || '';
    if (!url) {
        throw new Error("No QUERY_URL provided");
    }

    const querySelector = process.env.QUERY_SELECTOR || '';
    if (!querySelector) {
        throw new Error("No QUERY_SELECTOR provided");
    }

    const res = await axios.get(url);
    const html = res.data;
    const root = parse(html);
    const match = root.querySelector(querySelector);
    if (match) {
        const elementHtml = match.outerHTML;
        console.log(`Matched selector ${querySelector} with element: ${elementHtml}`);
    } else {
        console.log(`No match for selector ${querySelector}`);
    }
};
