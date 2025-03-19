import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const ogImage = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/bg.webp`;

export const metadata: Metadata = {
	metadataBase: new URL("https://marugoto-works.com"),
	title: {
		default: "まるごとワークス - 生成AI活用と事業検証の支援",
		template: "%s | まるごとワークス"
	},
	description: "まるごとワークスは、生成AIを活用した事業検証とビジネス開発を支援します。最新の技術とマーケティング戦略を駆使し、新規事業の立ち上げや成長をサポートします。",
	openGraph: {
		title: "まるごとワークス - 生成AI活用と事業検証の支援",
		description: "まるごとワークスは、生成AIを活用した事業検証とビジネス開発を支援します。",
		type: "website",
		locale: "ja_JP",
		url: "https://marugoto-works.com",
		siteName: "まるごとワークス",
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "まるごとワークス - 生成AI活用と事業検証の支援",
		description: "まるごとワークスは、生成AIを活用した事業検証とビジネス開発を支援。",
		images: [ogImage]
	},
	keywords: [
		"生成AI活用",
		"ビジネス検証支援",
		"新規事業開発",
		"eスポーツ環境構築",
		"高齢者ゲーミング",
		"ゲーミングPC設置",
		"公式LINE AIチャットボット",
		"フリーランサー案件自動通知",
		"ブランドサイト構築",
		"マーケティング支援"
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		}
	},
	formatDetection: {
		telephone: false,
	},
	verification: {
		google: "your-google-site-verification-code",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
