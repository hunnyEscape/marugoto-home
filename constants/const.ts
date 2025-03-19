import { GameInfo } from '../components/GameCard';
export const TEXT_STYLES = {
	title: "text-5xl font-extrabold mb-4",
	sectionTitle: "text-4xl md:text-6xl font-extrabold mb-2 text-blue-600 leading-[1.1]",
	subtitle: "text-lg md:text-xl ml-0 md:ml-1 text-gray-500",
	articleTitle: "text-xl ml-1 text-gray-300 font-bold",
	paragraph: "text-lg md:text-xl ml-1 text-gray-500",
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
		title: "フリーランサー向けの案件通知Bot（Discord）",
		description: `クライアントの信頼性や工数を分析し、高品質な案件のみを自動抽出して通知します。これにより、単発案件のオーバーヘッドやリスクを大幅に削減し、より安定した受注が可能になります。`,
		imageUrl: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr23.webp`,
	},
	{
		title: "公式LINEアカウントの顧客対応AI",
		description: `従来のシナリオ型チャットBotではなく、RAG（Retrieval Augmented Generation）を活用した対話型AIを組み込みます。商材やサービスの専門知識を学習させ、顧客の質問に柔軟に対応します。
					ユーザーのヒアリングや日常会話を自動化します。会話データを蓄積し、ユーザーごとのレポートを出力します。
			`,
		imageUrl: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr24.webp`,
	},
	{
		title: "ブランドサイト制作支援",
		description: "企業や個人のブランド構築をサポート。ストーリー設計、コピーライティング、デザイン制作、決済システムの統合、企画から公開まで一気通貫で対応します。",
		imageUrl: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr25.webp`,
	},
	{
		title: "トレンドのフォロー支援(Web3、生成アート)",
		description: "ユーザーがリアルタイムで好みの3Dオブジェクトを生成し、それをNFT化・二次流通まで行える統合プラットフォームの開発",
		imageUrl: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/mr26.webp`,
	},
];