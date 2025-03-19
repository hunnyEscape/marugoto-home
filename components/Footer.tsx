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
}