import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const host = context.request.headers.get('host') || url.hostname;

  if (
    host.includes('www.timeswinter.com') ||
    host.includes('timeswinter.com') ||
    host.includes('www.timeswimconverter.com')
  ) {
    return context.redirect(`https://timeswimconverter.com${url.pathname}${url.search}`, 301);
  }

  return next();
});
