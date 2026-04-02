import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://edumind-insight.vercel.app';

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '에듀마인 인사이트',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: '학원장의 학부모 상담을 돕는 AI 기반 학원 운영 및 상담 관리 솔루션',
  url: siteUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    description: '무료 플랜 제공 (Pro 플랜 월 160,000원)',
  },
  provider: {
    '@type': 'Organization',
    name: '에듀마인',
    url: siteUrl,
  },
  featureList: [
    'AI 기반 학부모 상담 가이드',
    '상담 이력 관리 (CRM)',
    '맞춤형 상담 스크립트 생성',
    '원생 퇴원 예측 분석',
    'RAG 기반 학원 맞춤 AI',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*
       * 메인 페이지 콘텐츠를 여기에 배치하세요.
       * 기존 index.html의 <body> 내용을 React 컴포넌트로 마이그레이션하거나,
       * 아래처럼 섹션 컴포넌트를 import해서 사용할 수 있습니다.
       *
       * 예시:
       * import HeroSection from '@/components/HeroSection';
       * import PricingSection from '@/components/PricingSection';
       *
       * <main>
       *   <HeroSection />
       *   <PricingSection />
       * </main>
       */}
      <main>
        {/* 콘텐츠 영역 */}
      </main>
    </>
  );
}
