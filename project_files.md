-e 
### FILE: ./src/app/layout.tsx

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
	metadataBase: new URL('https://your-domain.com'),
	title: {
		default: 'X-MODE - シニアのeスポーツ環境構築サポート',
		template: '%s | X-MODE'
	},
	description: 'シニアのeスポーツ環境構築サービス。専門スタッフが、年齢に関係なく誰もが楽しめるゲーミング環境を丁寧にサポートします。',
	openGraph: {
		title: 'X-MODE - シニア世代のためのeスポーツ環境構築',
		description: 'シニア世代のためのeスポーツ環境構築サービス。専門スタッフが、年齢に関係なく誰もが楽しめるゲーミング環境を丁寧にサポートします。',
		type: 'website',
		locale: 'ja_JP',
		url: 'https://your-domain.com',
		siteName: 'X-MODE',
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'X-MODE - シニア世代のeスポーツ環境構築',
		description: 'シニア世代のためのeスポーツ環境構築サービス。専門スタッフが、年齢に関係なく誰もが楽しめるゲーミング環境を丁寧にサポートします。',
		images: [ogImage]
	},
	keywords: [
		'シニアeスポーツ',
		'高齢者ゲーミング',
		'ゲーミングPC設置',
		'初心者eスポーツ',
		'年配者ゲーム環境',
		'eスポーツサポート',
		'ゲーミング初心者',
		'簡単ゲーム配信'
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
		google: 'your-google-site-verification-code',
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
}-e 
### FILE: ./src/app/page.tsx

"use client";
import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image';
import GameCard, { GameInfo } from '../../components/GameCard';
import ImageModal from '../../components/ImageModal';
import InquiryModal from "../../components/InquiryModal";
import { TEXT_STYLES, gameInfos, games } from '../../constants/const';
import ParticleBackground from '../../components/ParticleBackground';
import Footer, { LegalModalType } from '../../components/Footer';
import LegalModal from '../../components/LegalModal';
export default function Home() {
	const [selectedGame, setSelectedGame] = useState<GameInfo | null>(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
	const [legalModalOpen, setLegalModalOpen] = useState(false);
	const [legalModalType, setLegalModalType] = useState<LegalModalType>('disclaimer');
	const handleOpenModal = (game: GameInfo) => {
		setSelectedGame(game);
		setModalOpen(true);
	};
	const isLegalModalOpen = (legalModalType: LegalModalType) => {
		setLegalModalType(legalModalType);
		setLegalModalOpen(true);
	}
	return (
		<>
			<LegalModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} type={legalModalType} />
			<ImageModal
				game={selectedGame}
				modalOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			/>
			<InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
			<Head>
				<title>加速する自由 - ゲーミング配信サービス</title>
				<meta
					name="description"
					content="専門のプロによるゲーミング＆配信環境構築サポート。快適なプレイ環境を実現します。"
				/>
			</Head>
			<div className="z-[-1]">
				<ParticleBackground />
			</div>
			<div className="bg-white text-gray-800 font-sans min-h-screen">
				<main className="mx-full">
					<div className="relative flex w-1/2 h-screen items-center justify-center text-center text-white bg-black">
						<div className="text-left w-4/5">
							<h1 className={TEXT_STYLES.sectionTitle}>生成AI活用による<br />ビジネス開発の加速</h1>
							<p className={TEXT_STYLES.subtitle}>Accelerating Business Development with Generative AI</p>
						</div>
					</div>
					<div className="relative flex w-1/2 h-[150vh] items-center justify-center text-center text-white bg-black">
						<div className="text-left w-4/5">
							<h1 className={TEXT_STYLES.sectionTitle}>シニア向けeスポーツ事業<br />～検証中～</h1>
							<Image
								src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/desktop.webp`}
								alt="desktop"
								width={500}
								height={300}
								className="w-full rounded-lg"
							/>
							<p className={`${TEXT_STYLES.subtitle} mt-2`}>
								シニア世代に向けて、eスポーツの楽しさを広めます。
								eスポーツは対話や協力を促し、高齢者の社会参加を自然に促進します。身体的な負担が少なく、怪我のリスクがほぼないため、高齢者でも安心して楽しめます。
								研究により、適度なゲームプレイが認知機能の維持・向上に寄与することが示されています。高齢者の孤立防止や健康維持に貢献し、社会福祉の向上につながることが期待できます。
								高齢者はデジタルツールへの接点が限られPCゲームにも馴染みがなく、体験教室などの対面の場を設けることが必用です。
							</p>
							<p className={`${TEXT_STYLES.subtitle} mt-1`}>
								Senior eSports Business under validation : eSports encourage communication and cooperation, naturally facilitating social participation among seniors. With minimal physical strain and almost no risk of injury, seniors can enjoy gaming safely and comfortably.
								Research has shown that moderate gameplay contributes to maintaining and improving cognitive function. It helps prevent social isolation, supports overall health, and is expected to enhance social welfare.
								Since many seniors have limited exposure to digital tools and are unfamiliar with PC gaming, it is essential to provide in-person experiences such as hands-on workshops.
							</p>
						</div>
					</div>
					<div className="relative flex w-1/2 h-[100vh] bg-black" />
					<div className="relative flex w-full h-[180vh] items-center justify-center text-white bg-black">
						<div className="text-left w-2/3">
							<h1 className={TEXT_STYLES.sectionTitle}>過去の取り組み</h1>
							<p className={TEXT_STYLES.subtitle}>previous works</p>
							<div className="grid grid-cols-2 gap-6 mt-10">
								{games.map((game, index) => (
									<GameCard
										key={index}
										title={game.title}
										description={game.description}
										imageUrl={game.imageUrl}
										onClick={()=>{}}
										gameInfo={gameInfos[index]}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="relative flex w-1/2 h-[100vh] items-center justify-left text-white bg-black ml-auto" />
					<div className="relative flex w-1/2 h-[150vh] items-center justify-left text-white bg-black ml-auto">
						<div>
							<div className="text-left w-3/4">
								<h1 className={TEXT_STYLES.sectionTitle}>
									アイデアの検証に<br/>協力します
								</h1>
								<p className={`${TEXT_STYLES.subtitle} mb-2`}>
									アイデアレベルから、データ抽出作業、技術的検証、マーケティング戦略、運営スキーム、ダウンサイドとアップサイドの見積もりまでつなげます。
								</p>
								<Image
									src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/ssd.webp`}
									alt="desktop"
									width={500}
									height={300}
									className="w-full rounded-lg mb-2"
								/>
								<li className={TEXT_STYLES.paragraph}>柔軟な契約形態OK</li>
							</div>
						</div>
					</div>
					<div className="relative flex w-1/2 h-[130vh] items-center justify-left text-white bg-black ml-auto">
						<div className="text-left w-3/4">
							<section className="">
								<h2 className={TEXT_STYLES.sectionTitle}>
									サービスの流れ
								</h2>
								<div className="space-y-8 mt-5">
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>1. お問い合わせ</h3>
										<p className={TEXT_STYLES.paragraph}>まずはご連絡ください。</p>
									</article>
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>2. 見積もり</h3>
										<p className={TEXT_STYLES.paragraph}>ご相談内容に応じて柔軟に見積もります。</p>
									</article>
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>3. 実施</h3>
										<p className={TEXT_STYLES.paragraph}>
											検証のステップで必用になった開発や調査など行っていきます。
										</p>
									</article>
								</div>
							</section>
						</div>
					</div>
					<Footer onOpenLegalModal={(type) => isLegalModalOpen(type)} />
				</main >
			</div >
		</>
	)
}
-e 
### FILE: ./next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ['d1abhb48aypmuo.cloudfront.net'],
	},
};
module.exports = nextConfig;
export default nextConfig;-e 
### FILE: ./components/InquiryModal.tsx

"use client";
import React, { useEffect } from "react";
import { TEXT_STYLES } from "../constants/const";

interface InquiryModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {

		useEffect(() => {
			if (!isOpen) return;

			document.body.style.overflow = "hidden"; // スクロール
			return () => {
				document.body.style.overflow = "auto"; // スクロール復帰
			};
		}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md text-white p-6 z-50">
			<div className="w-1/2 overflow-y-auto max-h-[100vh] text-left mx-auto">
				<button
					onClick={onClose}
					className="absolute top-6 right-6 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
				>
					✖
				</button>

				<h2 className={`${TEXT_STYLES.sectionTitle}`}>
					お問い合わせ・サービスの流れ
				</h2>

				<div className="space-y-8 mt-6">
					{/* 各ステップ */}
					<section>
						<h3 className={TEXT_STYLES.articleTitle}>📞 1. お問い合わせ & スケジュール調整</h3>
						<p className={TEXT_STYLES.paragraph}>
							まずは<strong>お電話またはお問い合わせフォーム</strong>からご連絡ください。<br />
							お客様のご都合に合わせ、<strong>初回訪問のスケジュールを調整</strong>します。
						</p>
					</section>

					<section>
						<h3 className={TEXT_STYLES.articleTitle}>🏠 2. 初回訪問 & 環境チェック</h3>
						<p className={TEXT_STYLES.paragraph}>
							ご自宅の環境を確認し、必要なセットアップや事前準備を行います。
						</p>
						<ul className="list-disc pl-6">
							<li>✅ ネット環境・設置スペース・電源状況の確認</li>
							<li>✅ 追加の机やモニター、デバイスの最適配置を提案</li>
							<li>✅ 希望するゲーム・配信機能・オプションのヒアリング</li>
							<li>✅ ネット回線業者との調整（必要な回線速度・配線の確認）</li>
						</ul>
					</section>

					<section>
						<h3 className={TEXT_STYLES.articleTitle}>🔧 3. 二度目の訪問 & 設置作業</h3>
						<p className={TEXT_STYLES.paragraph}>
							専門スタッフが訪問し、<strong>ゲーミング & 配信環境のセットアップ</strong>を実施。
						</p>
						<ul className="list-disc pl-6">
							<li>✅ ゲーミングPC・配信機材（カメラ・マイク・入力デバイス）の設置・最適化</li>
							<li>✅ Wi-Fi & 有線LANの最適化で安定したネットワーク環境を構築</li>
							<li>✅ ゲーム・配信ソフトのインストールと動作確認</li>
							<li>✅ 実際の配信テストで、スムーズな配信環境をチェック</li>
						</ul>
					</section>

					<section>
						<h3 className={TEXT_STYLES.articleTitle}>💡 4. 継続サポート & アフターケア</h3>
						<p className={TEXT_STYLES.paragraph}>
							設置後も安心してご利用いただけるよう、<strong>定期的なサポートを提供。</strong>
						</p>
						<ul className="list-disc pl-6">
							<li>🔹 機材や配信設定の調整・トラブル対応</li>
							<li>🔹 新しいゲームや機能の追加・設定変更のサポート</li>
							<li>🔹 機材アップグレードの相談 & 手配</li>
						</ul>
					</section>

					<section>
						<h3 className={TEXT_STYLES.articleTitle}>📩 今すぐお問い合わせください！</h3>
						<p className={TEXT_STYLES.paragraph}>
							ゲーム & 配信環境の構築は、<strong>専門のプロにお任せください。</strong><br />
							快適なゲーミングライフをスタートするために、<strong>まずはお気軽にご相談を！</strong>
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default InquiryModal;
-e 
### FILE: ./components/ParticleBackground.tsx

"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPプラグインを登録
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

// アニメーション設定パラメータ
const ANIMATION_CONFIG = {
	// パーティクル関連
	PARTICLE_DENSITY: 4,         // パーティクルの密度 (大きいほど疎になる)
	PARTICLE_SIZE: 3,            // パーティクルのサイズ
	PARTICLE_SPREAD_X: 200,      // X方向の拡散範囲
	PARTICLE_SPREAD_Y: 200,      // Y方向の拡散範囲
	USE_ROUND_PARTICLES: false,  // 丸いパーティクルを使用するか

	// スクロールトリガー関連
	SCRUB_FACTOR: 0.5,           // スクロールの滑らかさ (大きいほど滑らか)

	// 散らばり開始・終了位置
	START_SCATTER_VH: 2,      // 散らばり始めるスクロール位置 (vh単位)
	MID_POINT_VH: 4.5,            // 最大散らばり位置 (vh単位)
	END_SCATTER_VH: 7,          // 元に戻り終わる位置 (vh単位)

	// 進行度計算関連
	SCATTER_POWER: 0.5,          // 散らばる速度のべき乗 (大きいほど加速が緩やか)
	GATHER_POWER: 2.5,           // 戻る速度のべき乗 (大きいほど加速が緩やか)

	// デバッグ
	//SHOW_DEBUG: process.env.NODE_ENV === 'development',  // デバッグ情報を表示するか
	SHOW_DEBUG: false,
};

const ParticleBackground: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
	const particlesRef = useRef<Array<Particle>>([]);
	const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
	const [debugLog, setDebugLog] = useState<string[]>([]);

	// デバッグログを追加
	const addDebugLog = (message: string) => {
		setDebugLog(prev => [...prev, message]);
		console.log(message);
	};

	// パーティクルクラス
	class Particle {
		x: number;
		y: number;
		originX: number;
		originY: number;
		color: string;
		size: number;
		randomX: number;
		randomY: number;

		constructor(x: number, y: number, color: string, size: number) {
			this.x = x;
			this.y = y;
			this.originX = x;
			this.originY = y;
			this.color = color;
			this.size = size;
			// 設定値を使用
			this.randomX = Math.random() * ANIMATION_CONFIG.PARTICLE_SPREAD_X * 2 - ANIMATION_CONFIG.PARTICLE_SPREAD_X;
			this.randomY = Math.random() * ANIMATION_CONFIG.PARTICLE_SPREAD_Y * 2 - ANIMATION_CONFIG.PARTICLE_SPREAD_Y;
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.fillStyle = this.color;

			if (ANIMATION_CONFIG.USE_ROUND_PARTICLES) {
				// 丸いパーティクル
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
				ctx.fill();
			} else {
				// 四角いパーティクル
				ctx.fillRect(this.x, this.y, this.size, this.size);
			}
		}

		update(progress: number) {
			// progress: 0 = 原点, 1 = 完全に散らばった状態
			this.x = this.originX + (this.randomX * progress);
			this.y = this.originY + (this.randomY * progress);
		}
	}

	// 画像のロード処理
	useEffect(() => {
		if (typeof window === 'undefined') return;

		// globalのHTMLImageElementを使用
		const img = new window.Image();
		img.crossOrigin = "anonymous";
		img.src = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/bg.webp`;

		img.onload = () => {
			addDebugLog(`画像がロードされました: ${img.width}x${img.height}`);
			setImageElement(img);
			setImageLoaded(true);
		};

		img.onerror = (e) => {
			addDebugLog(`画像の読み込みに失敗しました: ${e}`);
		};
	}, []);

	// 画像をパーティクルに変換する関数
	const createParticlesFromImage = () => {
		if (!canvasRef.current || !imageElement || !imageLoaded) {
			addDebugLog('パーティクル生成の前提条件が満たされていません');
			return;
		}

		addDebugLog('パーティクル生成を開始します');
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			addDebugLog('キャンバスコンテキストを取得できませんでした');
			return;
		}

		// 一時的なキャンバスを作成して画像データを取得
		const tempCanvas = document.createElement('canvas');
		const tempCtx = tempCanvas.getContext('2d');
		if (!tempCtx) {
			addDebugLog('一時キャンバスコンテキストを取得できませんでした');
			return;
		}

		// 画像のスケールを調整して画面内に収めるための計算
		const windowAspect = window.innerWidth / window.innerHeight;
		const imageAspect = imageElement.width / imageElement.height;

		let drawWidth, drawHeight;
		let offsetX = 0, offsetY = 0;

		if (windowAspect > imageAspect) {
			// ウィンドウの方が横長の場合、幅に合わせる
			drawWidth = window.innerWidth;
			drawHeight = drawWidth / imageAspect;
			offsetY = (window.innerHeight - drawHeight) / 2;
		} else {
			// ウィンドウの方が縦長の場合、高さに合わせる
			drawHeight = window.innerHeight;
			drawWidth = drawHeight * imageAspect;
			offsetX = (window.innerWidth - drawWidth) / 2;
		}

		// 一時キャンバスのサイズを設定
		const scale = 0.5; // パフォーマンスのためにスケールダウン
		tempCanvas.width = drawWidth * scale;
		tempCanvas.height = drawHeight * scale;

		// 画像を一時キャンバスに描画
		tempCtx.drawImage(imageElement, 0, 0, tempCanvas.width, tempCanvas.height);

		try {
			// 画像データをピクセル単位で取得
			const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
			const data = imageData.data;

			// 設定からパーティクルの密度を使用
			const density = ANIMATION_CONFIG.PARTICLE_DENSITY;

			// パーティクルを作成
			particlesRef.current = [];
			for (let y = 0; y < tempCanvas.height; y += density) {
				for (let x = 0; x < tempCanvas.width; x += density) {
					const index = (y * tempCanvas.width + x) * 4;
					// アルファ値が一定以上の場合のみパーティクルを作成
					if (data[index + 3] > 128) {
						const r = data[index];
						const g = data[index + 1];
						const b = data[index + 2];
						const color = `rgb(${r},${g},${b})`;

						// キャンバス上の正しい位置に配置
						const screenX = (x / scale) + offsetX;
						const screenY = (y / scale) + offsetY;

						const particle = new Particle(
							screenX,
							screenY,
							color,
							density * (ANIMATION_CONFIG.PARTICLE_SIZE / 2)
						);

						particlesRef.current.push(particle);
					}
				}
			}

			addDebugLog(`${particlesRef.current.length}個のパーティクルを生成しました`);
		} catch (error) {
			addDebugLog(`画像データの処理中にエラーが発生しました: ${error}`);
		}
	};

	// アニメーションを描画
	const animate = (progress: number) => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// キャンバスをクリア
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 進行度が0の場合（画像表示の状態）は、パーティクルではなく元の画像を描画
		if (progress === 0 && imageElement) {
			// 画像のスケールを調整して画面内に収めるための計算
			const windowAspect = window.innerWidth / window.innerHeight;
			const imageAspect = imageElement.width / imageElement.height;

			let drawWidth, drawHeight;
			let offsetX = 0, offsetY = 0;

			if (windowAspect > imageAspect) {
				// ウィンドウの方が横長の場合、幅に合わせる
				drawWidth = window.innerWidth;
				drawHeight = drawWidth / imageAspect;
				offsetY = (window.innerHeight - drawHeight) / 2;
			} else {
				// ウィンドウの方が縦長の場合、高さに合わせる
				drawHeight = window.innerHeight;
				drawWidth = drawHeight * imageAspect;
				offsetX = (window.innerWidth - drawWidth) / 2;
			}

			// 元の画像を描画
			ctx.drawImage(imageElement, offsetX, offsetY, drawWidth, drawHeight);
			return;
		}

		// パーティクルを更新して描画
		particlesRef.current.forEach(particle => {
			particle.update(progress);
			particle.draw(ctx);
		});
	};

	// ウィンドウサイズ変更時の処理
	useEffect(() => {
		const handleResize = () => {
			if (!containerRef.current) return;

			const width = window.innerWidth;
			const height = window.innerHeight;

			setCanvasSize({ width, height });
			addDebugLog(`キャンバスサイズを変更: ${width}x${height}`);

			// サイズ変更後にアニメーションを更新（粒子が0の場合は進行度0で元画像を表示）
			if (particlesRef.current.length === 0) {
				animate(0);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// キャンバスサイズが変更されたら、パーティクルを再生成
	useEffect(() => {
		if (canvasSize.width > 0 && canvasSize.height > 0 && imageLoaded && imageElement) {
			createParticlesFromImage();
		}
	}, [canvasSize, imageLoaded, imageElement]);

	// スクロールアニメーションを設定
	useEffect(() => {
		if (typeof window === 'undefined' || !particlesRef.current.length) {
			addDebugLog('スクロールアニメーション設定の前提条件が満たされていません');
			return;
		}

		addDebugLog('スクロールアニメーションを設定します');

		// 初期状態（進行度0）を描画
		animate(0);

		// スクロールトリガーを設定
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: 'bottom bottom',
				scrub: ANIMATION_CONFIG.SCRUB_FACTOR, // 設定値を使用
				onUpdate: (self) => {
					let progress = 0;

					// スクロール位置に基づいて進行度を計算
					const scrollPos = self.progress * document.body.scrollHeight;

					// 設定からVH値を取得
					const start = window.innerHeight * ANIMATION_CONFIG.START_SCATTER_VH;
					const mid = window.innerHeight * ANIMATION_CONFIG.MID_POINT_VH;
					const end = window.innerHeight * ANIMATION_CONFIG.END_SCATTER_VH;

					if (scrollPos < start) {
						// 開始位置より前: 進行度0（画像のまま）
						progress = 0;
					} else if (scrollPos > end) {
						// 終了位置より後: 進行度0（画像に戻る）
						progress = 0;
					} else if (scrollPos < mid) {
						// 開始から中間まで: 散らばる
						// 設定からべき乗値を使用
						progress = Math.pow((scrollPos - start) / (mid - start), ANIMATION_CONFIG.SCATTER_POWER);
					} else {
						// 中間から終了まで: 元に戻る
						// 設定からべき乗値を使用
						progress = 1 - Math.pow((scrollPos - mid) / (end - mid), ANIMATION_CONFIG.GATHER_POWER);
					}

					// パーティクルアニメーションを更新
					animate(progress);
				}
			}
		});

		return () => {
			// クリーンアップ
			if (tl.scrollTrigger) {
				tl.scrollTrigger.kill();
			}
		};
	}, [particlesRef.current.length]);

	return (
		<div ref={containerRef} className="fixed top-0 left-0 w-full h-full bg-black pointer-events-none z-0">
			<canvas
				ref={canvasRef}
				width={canvasSize.width}
				height={canvasSize.height}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: 'transparent',
				}}
			/>
			{ANIMATION_CONFIG.SHOW_DEBUG && (
				<div style={{
					position: 'fixed',
					bottom: 10,
					left: 10,
					backgroundColor: 'rgba(0,0,0,0.7)',
					color: 'white',
					padding: '10px',
					fontSize: '12px',
					zIndex: 9999,
					maxHeight: '200px',
					overflowY: 'auto',
					maxWidth: '80%',
					pointerEvents: 'auto'
				}}>
					<h4>デバッグログ:</h4>
					<ul>
						{debugLog.map((log, i) => (
							<li key={i}>{log}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ParticleBackground;-e 
### FILE: ./components/Footer.tsx

import { TEXT_STYLES } from '../constants/const';
export type LegalModalType = 'disclaimer' | 'privacy';

interface FooterProps {
	onOpenLegalModal: (type:LegalModalType) => void;
}

export default function Footer({ onOpenLegalModal }: FooterProps) {
	return (
		<footer className="bg-black/80 backdrop-blur-md text-white h-screen flex items-end">
			<div className="container mx-auto px-4 pb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex flex-col justify-between h-full">
						<div>
							<h2 className={`${TEXT_STYLES.sectionTitle} mb-1`}>まるごとワークス.ai</h2>
							<p className={TEXT_STYLES.paragraph}>
								MARUGOTO-WORKS.AI
							</p>
						</div>
					</div>
					<div>
						<h3 className={`${TEXT_STYLES.articleTitle} mb-1`}>連絡先</h3>
						<div className={TEXT_STYLES.paragraph}>
							<p className="mb-0">所在地 : 東京都渋谷区渋谷2-19-15宮益坂ビルディング609</p>
							<p className="mb-1">メールアドレス:info@marugoto-works.com</p>
						</div>
						<div className="flex gap-4 ml-1 mt-5">
							<button
								onClick={() => onOpenLegalModal('disclaimer')}
								className={`${TEXT_STYLES.articleTitle} cursor-pointer hover:text-white`}
							>
								免責事項
							</button>
							<button
								onClick={() => onOpenLegalModal('privacy')}
								className={`${TEXT_STYLES.articleTitle} cursor-pointer hover:text-white`}
							>
								プライバシーポリシー
							</button>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-6 text-center">
					<p className={TEXT_STYLES.minorText}>
						© {new Date().getFullYear()} MARUGOTO WORKS.AI All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}-e 
### FILE: ./components/GameCard.tsx

import Image from "next/image";

export interface GameInfo {
	title: string;
	description: string;
	images: string[];
}

interface GameCardProps {
	title: string;
	description: string;
	imageUrl: string;
	onClick: (game: GameInfo) => void;
	gameInfo: GameInfo;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, imageUrl, onClick, gameInfo }) => {
	return (
		<article className="p-4">
			<h3 className="text-xl ml-1 text-gray-300 font-bold mb-2">{title}</h3>
			<div className="relative overflow-hidden rounded-lg group" onClick={() => onClick(gameInfo)}>
				<Image
					src={imageUrl}
					alt={title}
					width={500}
					height={300}
					className="w-full rounded-lg transform transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-lg">
					<p className="text-white text-center px-4 max-w-full">{description}</p>
				</div>
			</div>
		</article>
	);
};

export default GameCard;-e 
### FILE: ./components/BackgroundAnimation.tsx

"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";

// 背景シーンコンポーネント
const BackgroundScene = () => {
	const texture = useLoader(THREE.TextureLoader, `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/bg.webp`);
	const meshRef = useRef<THREE.Mesh>(null);

	useEffect(() => {
		if (texture) {
			texture.minFilter = THREE.LinearFilter;
			texture.magFilter = THREE.LinearFilter;
			texture.needsUpdate = true;
		}
	}, [texture]);

	// 画面サイズに完全に合わせる
	useEffect(() => {
		if (!meshRef.current) return;

		const resize = () => {
			const camera = meshRef.current?.parent?.parent?.children.find(
				child => child instanceof THREE.Camera
			) as THREE.PerspectiveCamera;

			if (!camera) return;

			// カメラの視錐台の寸法を計算
			const distance = camera.position.z;
			const fov = THREE.MathUtils.degToRad(camera.fov);
			const height = 2 * Math.tan(fov / 2) * distance;
			const width = height * (window.innerWidth / window.innerHeight);

			// メッシュのサイズをカメラの視野に合わせる
			if (meshRef.current) {
				meshRef.current.scale.set(width, height, 1);
			}
		};

		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<mesh ref={meshRef} position={[0, 0, 0]}>
			<planeGeometry args={[1, 1]} />
			<meshBasicMaterial map={texture} transparent={true} />
		</mesh>
	);
};

// メインコンポーネント
const BackgroundAnimation: React.FC = () => {
	const [mounted, setMounted] = useState(false);

	// クライアントサイドでのみレンダリング
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 10,
			pointerEvents: 'none',
			overflow: 'hidden'
		}}>
			<Canvas
				camera={{ position: [0, 0, 5], fov: 60 }}
				style={{ width: '100%', height: '100%' }}
				gl={{ antialias: true, alpha: true }}
			>
				<ambientLight intensity={1} />
				<BackgroundScene />
			</Canvas>
		</div>
	);
};

export default BackgroundAnimation;-e 
### FILE: ./components/ImageModal.tsx

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GameInfo } from "../components/GameCard";
import { TEXT_STYLES } from "../constants/const";

interface ImageModalProps {
	game: GameInfo | null;
	modalOpen: boolean;
	onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ game, modalOpen, onClose }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(true);

	useEffect(() => {
		if (!modalOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
			if (e.key === "ArrowRight") nextImage();
			if (e.key === "ArrowLeft") prevImage();
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden"; // スクロール禁止
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto"; // スクロール復帰
		};
	}, [modalOpen]);

	if (!game || !modalOpen) return null;

	// 画像の切り替え
	const nextImage = () => setCurrentIndex((prev) => (prev + 1) % game.images.length);
	const prevImage = () =>
		setCurrentIndex((prev) => (prev - 1 + game.images.length) % game.images.length);

	// モーダルを閉じる処理（画像インデックスをリセット）
	const handleClose = () => {
		setCurrentIndex(0);
		onClose();
	};

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md z-50 p-6">
			{/* ✖ Close ボタン（画像の外・右上に配置） */}
			<button
				onClick={handleClose}
				className="absolute top-6 right-6 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
			>
				✖
			</button>

			{/* モーダル本体 */}
			<div className="w-3/4 rounded-lg">
				{/* 画像スライダー */}
				<div
					className="flex flex-col items-center relative"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Image
						src={game.images[currentIndex]}
						alt={game.title}
						width={1600}
						height={900}
						className="w-full h-auto rounded-lg"
					/>
					<div
						className={`absolute inset-0 flex items-center justify-center bg-black/70 text-white p-6 ${isHovered ? "opacity-100" : "opacity-0 transition-opacity duration-300"
							}`}
					>
						<p
							className={`${TEXT_STYLES.articleTitle} text-center leading-loose`}
							dangerouslySetInnerHTML={{ __html: game.description }}
						/>
					</div>


				</div>
				<div className="mt-6 flex justify-between items-center">
					<h3 className={`${TEXT_STYLES.sectionTitle} text-left`}>{game.title}</h3>
					<div className="flex gap-4">
						<button
							onClick={prevImage}
							className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition cursor-pointer"
						>
							◀ 前の画像
						</button>
						<button
							onClick={nextImage}
							className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition cursor-pointer"
						>
							次の画像 ▶
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageModal;
-e 
### FILE: ./components/LegalModal.tsx

"use client";
import React, { useEffect } from 'react';
import { TEXT_STYLES } from '../constants/const';
import { LegalModalType } from './Footer';
interface LegalModalProps {
	isOpen: boolean;
	type: LegalModalType | null;
	onClose: () => void;
}
export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';

			const handleKeyDown = (e: KeyboardEvent) => {
				if (e.key === 'Escape') onClose();
			};

			document.addEventListener('keydown', handleKeyDown);
			return () => {
				document.removeEventListener('keydown', handleKeyDown);
				document.body.style.overflow = 'auto';
			};
		}
	}, [isOpen, onClose]);

	if (!isOpen || !type) return null;

	const renderModalContent = () => {
		switch (type) {
			case 'disclaimer':
				return (
					<div>
						<h2 className={`${TEXT_STYLES.sectionTitle} mb-4`}>免責事項</h2>
						<div className={TEXT_STYLES.paragraph}>
							<p className="mb-2">1. 情報の正確性について</p>
							<p className="mb-4">当社は、本ウェブサイトに掲載されている情報の正確性には最大限の注意を払っておりますが、その完全性や正確性を保証するものではありません。</p>

							<p className="mb-2">2. サービス利用に関する免責</p>
							<p className="mb-4">当社のサービスを利用することによって生じる、いかなる損害についても当社は責任を負いません。</p>

							<p className="mb-2">3. リンク先のウェブサイト</p>
							<p className="mb-4">当社のウェブサイトから他のウェブサイトへのリンクを提供している場合、そのリンク先のウェブサイトの内容や信頼性について当社は一切の責任を負いません。</p>

							<p className="mb-2">4. 予告なしの変更</p>
							<p>当社は、本ウェブサイトの内容を予告なく変更する場合があります。</p>
						</div>
					</div>
				);

			case 'privacy':
				return (
					<div>
						<h2 className={`${TEXT_STYLES.sectionTitle} mb-4`}>プライバシーポリシー</h2>
						<div className={TEXT_STYLES.paragraph}>
							<p className="mb-2">1. 個人情報の収集</p>
							<p className="mb-4">当社は、サービス提供に必要な最小限の個人情報のみを収集いたします。</p>

							<p className="mb-2">2. 個人情報の利用目的</p>
							<p className="mb-4">収集した個人情報は、サービス提供、お客様サポート、及び重要なお知らせの連絡のみに使用いたします。</p>

							<p className="mb-2">3. 第三者への提供</p>
							<p className="mb-4">法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。</p>

							<p className="mb-2">4. 情報の管理</p>
							<p className="mb-4">個人情報は、不正アクセス、紛失、破壊、改ざん等から保護するため、適切な安全管理措置を講じます。</p>

							<p className="mb-2">5. 開示・訂正・削除</p>
							<p>お客様は、当社が保有する自己の個人情報の開示、訂正、削除を求めることができます。</p>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50">
			<div className="w-3/4 max-h-[80vh] overflow-y-auto p-8 relative">
				<button
					onClick={onClose}
					className="absolute top-6 right-6 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
				>
					✖
				</button>
				{renderModalContent()}
			</div>
		</div>
	);
}-e 
### FILE: ./components/SimpleBackgroundAnimation.tsx

"use client";
import React from "react";
import Image from "next/image";

const SimpleBackgroundAnimation: React.FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
			<div className="relative w-full h-full">
				<Image
					src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/bg.webp`}
					alt="Background"
					fill
					style={{ objectFit: "cover" }}
					priority
				/>
			</div>
		</div>
	);
};

export default SimpleBackgroundAnimation;-e 
### FILE: ./next-env.d.ts

/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
-e 
### FILE: ./constants/const.ts

import { GameInfo } from '../components/GameCard';
export const TEXT_STYLES = {
	title: "text-5xl font-extrabold mb-4",
	sectionTitle: "text-6xl font-extrabold mb-2 text-blue-600 leading-[1.1]",
	subtitle: "text-xl ml-1 text-gray-500",
	articleTitle: "text-xl ml-1 text-gray-300 font-bold",
	paragraph: "text-xl ml-1 text-gray-500",
	minorText: "text-gray-600",
	listItem: "text-lg mb-2 text-gray-500",
}
export const gameInfos: GameInfo[] = [
	{
		title: "Counter-Strike 2",
		description: `
			高度な撃ち合いテクニック<br/>
			Pixel Peeking - 自分の体を極力露出させずに、敵が見える範囲を最小限に抑えて撃ち合う技術<br/>
			Counter-Strafing - 動きながら撃つと弾がバラけるため一瞬停止して狙いを定める技術<br/>
			Wallbang - 遮蔽物に隠れている敵を把握し、遮蔽物ごと撃ち抜く技術</br>
		`,
		images: [
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/c1.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/c2.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/c3.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/c4.webp`
		],
	},
	{
		title: "Microsoft Flight Simulator",
		description: `
			現実世界そのもの<br/>
			1:1スケールで地球を完全再現、4万以上の空港を収録<br/>
			高度・地形・気圧・天候・乱気流をシミュレーションし、本物の航空管制にも対応<br/>
			リアルタイム気象データと完全同期し、現実の空をそのまま飛行可能<br/>
		`,
		images: [
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/m1.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/m2.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/m3.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/m4.webp`
		],
	},
	{
		title: "Fortnite",
		description: `
			史上最大のプレイヤー数<br/>
			シンプルながら奥深いゲームシステムと、プレイヤー自身が要塞を築き上げる独自性<br/>
			プレイヤー自身が要塞を築き上げ、防御拠点・高所確保・陣地構築を行い戦況を有利に運ぶ<br/>
			壁を駆け上がり、プレーヤーが飛び交う、高機動でダイナミックな戦闘<br/>
		`,
		images: [
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/f1.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/f2.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/f3.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/f4.webp`
		],
	},
	{
		title: "Gran Turismo 7",
		description: `
			プロも認める究極のシミュレーション<br/>
			タイヤの熱膨張・摩擦・劣化、車両ごとの重量・エンジン特性を完全シミュレート<br/>
			オーバーステア・アンダーステアを忠実に再現し、本物のレーサーも使用する精密な挙動<br/>
			F1やル・マンと同じ燃料戦略を導入し、リアルなピット戦略が勝敗を左右する<br/>
		`,
		images: [
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/g1.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/g2.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/g3.webp`,
			`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/g4.webp`
		],
	},
];
export const games = [
	{
		title: "フリーランサー支援のDiscord Bot",
		description: `クライアントの信頼や工数を詳細に分析し、良質な案件を自動抽出して通知する。単発案件のオーバーヘッドとリスクを大幅に削減する。`,
		imageUrl:`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr23.webp`,
	},
	{
		title: "公式Lineの顧客対応支援",
		description:`
			あらかじめ決められたシナリオ型チャットではなく、商材やサービスのドメイン知識をRAG(Retrieval Augmented Generation)で覚え込ませた対話型のチャットBotを公式Lineに組み込む。
			そのことでユーザーヒヤリングと日常会話の接点を自動化できる。
			会話データを蓄積し、ユーザーごとのレポートを出力する。
			`,
		imageUrl:`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr24.webp`,
	},
	{
		title: "ブランドサイト作成支援",
		description: "ストーリの構築、コピーライト、デザイン、決済システムの組み込みまで一気通貫",
		imageUrl:`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr25.webp`,
	},
	{
		title: "ビジネストレンドへのフォロー支援",
		description: "ユーザーが自分の好みの3Dオブジェクトをリアルタイム作成後、それをNFT化し、二次流通させることのできる統合プラットフォームの構築",
		imageUrl: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr26.webp`,
	},
];