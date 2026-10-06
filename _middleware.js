export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();

  if (
    hostname === 'www.timeswimconverter.com' ||
    hostname === 'www.timeswinter.com' ||
    hostname === 'timeswinter.com'
  ) {
    url.hostname = 'timeswimconverter.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return await context.next();
}
