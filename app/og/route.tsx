import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function GET(request: Request) {
  const url = new URL(request.url);
  const title =
    url.searchParams.get('title') || 'Francois Schoeman - Software Engineer';
  const description =
    url.searchParams.get('description') ||
    'Software engineer based in Stilbaai, South Africa';

  return new ImageResponse(
    <div
      tw="flex flex-col w-full h-full items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div tw="flex flex-col w-full h-full items-center justify-center p-16">
        <div tw="flex flex-col items-start justify-center bg-white rounded-3xl shadow-2xl p-16 w-full">
          <div tw="flex items-center mb-8">
            <div tw="flex w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mr-4" />
            <div tw="flex text-2xl font-semibold text-gray-600">FS</div>
          </div>
          <h1
            tw="flex text-6xl font-bold tracking-tight text-gray-900 mb-4"
            style={{
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>
          <p tw="flex text-3xl text-gray-600 mt-4">{description}</p>
          <div tw="flex items-center mt-12 text-xl text-gray-500">
            <span tw="flex">fsdev.co.za</span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
