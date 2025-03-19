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

export default GameCard;