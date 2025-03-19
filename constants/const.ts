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