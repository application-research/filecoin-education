const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

import * as S from '@common/server';
import * as Support from '@common/support';

import { IncomingWebhook } from '@slack/webhook';

export default async function apiSend(req, res) {
  await S.cors(req, res);

  const url = process.env.SLACK_WEB_HOOK_URL;
  const webhook = new IncomingWebhook(url);

  await Support.send({
    email: req.body.email,
    webhook,
  });

  res.json({ success: true });
}
