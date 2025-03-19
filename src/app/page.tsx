"use client";
import { useState } from "react";
import Image from 'next/image';
import GameCard from '../../components/GameCard';
import InquiryModal from "../../components/InquiryModal";
import { TEXT_STYLES, gameInfos, games } from '../../constants/const';
import ParticleBackground from '../../components/ParticleBackground';
import Footer, { LegalModalType } from '../../components/Footer';
import LegalModal from '../../components/LegalModal';
export default function Home() {
	const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
	const [legalModalOpen, setLegalModalOpen] = useState(false);
	const [legalModalType, setLegalModalType] = useState<LegalModalType>('disclaimer');
	const isLegalModalOpen = (legalModalType: LegalModalType) => {
		setLegalModalType(legalModalType);
		setLegalModalOpen(true);
	}
	return (
		<>
			<LegalModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} type={legalModalType} />
			<InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
			<div className="z-[-1]">
				<ParticleBackground />
			</div>
			<div className="bg-white text-gray-800 font-sans min-h-screen">
				<main className="mx-full">
					<div className="relative flex w-full md:w-1/2 h-screen items-center justify-center text-center text-white bg-black">
						<div className="text-left w-full md:w-4/5 p-5">
							<h1 className={TEXT_STYLES.sectionTitle}>生成AI活用による<br />ビジネス開発の加速</h1>
							<p className={TEXT_STYLES.subtitle}>Accelerating Business Development with Generative AI</p>
						</div>
					</div>
					<div className="relative flex w-full md:w-1/2 h-full md:h-[150vh] items-center justify-center text-center text-white bg-black">
						<div className="text-left w-full md:w-4/5 p-5">
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
					<div className="relative flex w-0 md:w-1/2 h-[100vh] bg-black" />
					<div className="relative flex w-full h-[180vh] items-center justify-center text-white bg-black">
						<div className="text-left w-full md:w-2/3">
							<h1 className={`${TEXT_STYLES.sectionTitle} px-5`}>過去の取り組み</h1>
							<p className={`${TEXT_STYLES.subtitle} px-5`}>previous works</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 mt-0 md:mt-10">
								{games.map((game, index) => (
									<GameCard
										key={index}
										title={game.title}
										description={game.description}
										imageUrl={game.imageUrl}
										onClick={() => { }}
										gameInfo={gameInfos[index]}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="relative flex w-0 md:w-1/2 h-[100vh] items-center justify-left text-white bg-black ml-auto" />
					<div className="relative flex w-full md:w-1/2 h-[150vh] items-center justify-left text-white bg-black ml-auto">
						<div>
							<div className="text-left w-full md:w-3/4 p-5">
								<h1 className={TEXT_STYLES.sectionTitle}>
									アイデア検証<br />事業開発支援
								</h1>
								<p className={`${TEXT_STYLES.subtitle} mb-2`}>
									アイデア段階から実用化までを包括的にサポートします。
									データ抽出・分析、
									技術的な検証、
									マーケティング戦略立案、
									事業スキームの構築、
									リスク（ダウンサイド）と成長可能性（アップサイド）の見積もり
								</p>
								<Image
									src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/ssd.webp`}
									alt="desktop"
									width={500}
									height={300}
									className="w-full rounded-lg mb-2"
								/>
								<li className={TEXT_STYLES.paragraph}>柔軟な契約形態に対応可能です。</li>
							</div>
						</div>
					</div>
					<div className="relative flex w-full md:w-1/2 h-[130vh] items-center justify-left text-white bg-black ml-auto">
						<div className="text-left w-full md:w-3/4 p-5">
							<section className="">
								<h2 className={TEXT_STYLES.sectionTitle}>
									サービスの流れ
								</h2>
								<div className="space-y-8 mt-5">
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>1.お問い合わせ</h3>
										<p className={TEXT_STYLES.paragraph}>まずはご連絡ください。</p>
									</article>
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>2.ヒアリング・見積もり</h3>
										<p className={TEXT_STYLES.paragraph}>ご要望に応じて柔軟にお見積もりを提示します。</p>
									</article>
									<article>
										<h3 className={TEXT_STYLES.articleTitle}>3.実施・検証</h3>
										<p className={TEXT_STYLES.paragraph}>
											必要に応じて開発・調査・マーケティング施策を実施し、事業の成功を支援します。
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
