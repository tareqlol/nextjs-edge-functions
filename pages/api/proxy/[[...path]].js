// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  runtime: 'experimental-edge',
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true,
    responseLimit: '5mb', // default: 4mb, maximum: 5mb
  },
};

export default async function handler (req) {
  const response = {
    pathName: req.nextUrl.pathname,
    searchParams: req.nextUrl.searchParams.toString(),
    requestMethod: req.method,
  }
  return new Response(new Blob([JSON.stringify(response, null, 2)], {type : 'application/json'}), {
    headers: req.headers,
    status: 200,
  });
}
