import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://edumind-insight.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: '에듀마인 인사이트 | 학원장을 위한 AI 학부모 상담 관리 솔루션',
    template: '%s | 에듀마인 인사이트',
  },

  description:
    '학부모 상담의 부담을 덜어드립니다. 에듀마인 인사이트는 학원장을 위한 AI 기반 상담 이력 관리, 맞춤형 상담 솔루션 및 원생 관리(CRM) 서비스입니다.',

  keywords: [
    '학원 학부모 상담',
    '학원장 상담 프로그램',
    '학원 상담 일지',
    'AI 학생 관리',
    '학원 CRM',
    '학부모 컴플레인 대처',
    '에듀마인 인사이트',
  ],

  openGraph: {
    title: '에듀마인 인사이트 | 학원장을 위한 AI 학부모 상담 관리 솔루션',
    description:
      '학부모 상담의 부담을 덜어드립니다. AI 기반 상담 이력 관리, 맞춤형 상담 가이드, 원생 CRM까지 한 번에.',
    url: siteUrl,
    type: 'website',
    siteName: '에듀마인 인사이트',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '에듀마인 인사이트 — 학원장을 위한 AI 상담 솔루션',
      },
    ],
    locale: 'ko_KR',
  },

  twitter: {
    card: 'summary_large_image',
    title: '에듀마인 인사이트 | AI 학부모 상담 관리',
    description: '학원장의 상담 부담을 덜어주는 AI 솔루션',
    images: ['/og-image.png'],
  },

  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',   // Google Search Console 소유권 확인 코드로 교체
    other: {
      'naver-site-verification': 'NAVER_VERIFICATION_CODE', // 네이버 서치어드바이저 코드로 교체
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
