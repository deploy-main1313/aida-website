import { Sparkles, Award, Users, BookOpen } from "lucide-react";
import aidaImage from "figma:asset/65d573de6906d2e454e3b3e6e7018791ba81ea44.png";

export function AboutSection() {
	const achievements = [
		{
			icon: Award,
			number: "3",
			text: "Років досвіду",
			color: "from-purple-500 to-violet-600",
		},
		{
			icon: Users,
			number: "1576+",
			text: "Індивідуальних сесій",
			color: "from-blue-500 to-cyan-600",
		},
	];

	return (
		<section id="about" className="py-24 px-4 relative">
			{/* Background cosmic effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full cosmic-twinkle" />
				<div
					className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full cosmic-twinkle"
					style={{ animationDelay: "1.5s" }}
				/>
				<div
					className="absolute top-1/2 right-10 w-4 h-4 bg-pink-400/40 rounded-full cosmic-twinkle"
					style={{ animationDelay: "3s" }}
				/>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-20 scroll-animate">
					<h2
						className="text-5xl md:text-7xl mb-8 cosmic-gradient-text tracking-wider"
						style={{
							fontFamily: "'Cinzel', serif",
							textShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
						}}
					>
						Про мене
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Photo section with enhanced effects */}
					<div className="relative scroll-animate">
						<div className="relative z-10 group">
							{/* Main image */}
							<div className="relative overflow-hidden rounded-3xl">
								<img
									src={aidaImage}
									alt="Аіда Алієва"
									className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-500 group-hover:scale-105"
								/>

								{/* Overlay glow effect */}
								<div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>

							{/* Floating cosmic elements around photo */}
							<div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl cosmic-float mystical-glow" />
							<div
								className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-500/20 rounded-full blur-xl cosmic-float mystical-glow"
								style={{ animationDelay: "2s" }}
							/>
							<div
								className="absolute top-1/2 -right-4 w-12 h-12 bg-violet-500/15 rounded-full blur-lg cosmic-float mystical-glow"
								style={{ animationDelay: "4s" }}
							/>

							{/* Mystical particles */}
							<div className="absolute top-10 right-10 w-2 h-2 bg-yellow-400/60 rounded-full cosmic-twinkle" />
							<div
								className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-purple-400/60 rounded-full cosmic-twinkle"
								style={{ animationDelay: "1s" }}
							/>
							<div
								className="absolute top-1/3 left-0 w-3 h-3 bg-pink-400/60 rounded-full cosmic-twinkle"
								style={{ animationDelay: "2s" }}
							/>
						</div>
					</div>

					{/* Content section */}
					<div className="space-y-8 scroll-animate">
						<div>
							<h3
								className="text-4xl text-white mb-6 cosmic-gradient-text"
								style={{
									fontFamily: "'Cinzel', serif",
								}}
							>
								Аіда Алієва
							</h3>

							<div
								className="space-y-6 text-lg text-gray-300 leading-relaxed"
								style={{
									fontFamily: "'Inter', sans-serif",
								}}
							>
								<p className="group hover:text-gray-200 transition-colors duration-300">
									Мене звати{" "}
									<span className="text-pink-400 group-hover:text-pink-300">
										Аіда Алієва
									</span>
									. Я працюю в напрямку глибинного аналізу особистості через
									нумерологію, матрицю долі та таро. Мій шлях у цій сфері
									почався з 16 років, інтуїтивно, без наставників чи "готових
									схем", через велике бажання допомагати та бути поруч з тими,
									кому це потрібно.
								</p>

								<p className="group hover:text-gray-200 transition-colors duration-300">
									Зараз я маю понад{" "}
									<span className="text-purple-400 group-hover:text-purple-300">
										3 роки практики, 1500+ індивідуальних сесій
									</span>
									, а 90% клієнтів стали постійними. Я поєдную інтуїтивну
									чутливість із чіткою логікою, аналітичним мисленням і
									здатністю побачити суть навіть у складних, заплутаних запитах.
								</p>

								<p className="group hover:text-gray-200 transition-colors duration-300">
									Я допомагаю людям у{" "}
									<span className="text-blue-400 group-hover:text-blue-300">
										кризових станах
									</span>
									: коли немає опори, коли втрачено зв'язок із собою, коли важко
									знайти рішення або напрямок. У роботі ставлю акцент на
									максимальне прийняття, включення та рішення ситуації без води
									та витрати часу.
								</p>
							</div>
						</div>

						<ul className="space-y-4">
							{[
								"Глибинний аналіз особистості через матрицю долі",
								"Інтуїтивні таро-консультації з практичними рішеннями",
								"Робота з кармічними програмами та родовими сценаріями",
								"Допомога в кризових та складних життєвих ситуаціях",
							].map((item, index) => (
								<li
									key={index}
									className="flex items-start group hover:translate-x-2 transition-transform duration-300"
								>
									<Sparkles
										className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0 group-hover:text-purple-300 cosmic-twinkle"
										style={{ animationDelay: `${index * 0.5}s` }}
									/>
									<span
										className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
										style={{
											fontFamily: "'Inter', sans-serif",
										}}
									>
										{item}
									</span>
								</li>
							))}
						</ul>

						{/* Enhanced mystical quote */}
						<div className="bg-gradient-to-r from-pink-500/15 to-purple-500/15 border-2 border-pink-500/30 rounded-3xl p-8 backdrop-blur-sm group hover:border-pink-400/40 transition-all duration-300 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<blockquote
								className="text-pink-300 italic text-center text-xl group-hover:text-pink-200 transition-colors duration-300 relative z-10"
								style={{
									fontFamily: "'Cinzel', serif",
								}}
							>
								"Моє завдання — дати людині ключі, але не обирати за неї двері."
							</blockquote>
							<div className="absolute top-4 right-4 w-2 h-2 bg-pink-400/60 rounded-full cosmic-twinkle" />
							<div
								className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/60 rounded-full cosmic-twinkle"
								style={{ animationDelay: "1s" }}
							/>
						</div>
					</div>
				</div>

				{/* Enhanced achievements with new data */}
				<div className="grid grid-cols-2 md:grid-cols-2 gap-8 scroll-animate">
					{achievements.map((achievement, index) => {
						const IconComponent = achievement.icon;
						return (
							<div
								key={index}
								className="text-center group hover:scale-110 transition-all duration-500"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<div
									className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl mb-6 mx-auto mystical-glow group-hover:shadow-2xl transition-all duration-500`}
								>
									<IconComponent className="h-10 w-10 text-white" />
								</div>
								<div
									className="text-4xl md:text-5xl cosmic-gradient-text mb-3 group-hover:scale-110 transition-transform duration-300"
									style={{
										fontFamily: "'Cinzel', serif",
									}}
								>
									{achievement.number}
								</div>
								<div
									className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
									style={{
										fontFamily: "'Inter', sans-serif",
									}}
								>
									{achievement.text}
								</div>
							</div>
						);
					})}
				</div>

				{/* Decorative cosmic divider */}
				<div className="flex justify-center mt-20 scroll-animate">
					<div className="flex items-center space-x-6 opacity-40">
						<div className="w-3 h-3 bg-purple-400 rounded-full cosmic-twinkle" />
						<div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
						<div
							className="w-4 h-4 bg-blue-400 rounded-full cosmic-twinkle"
							style={{ animationDelay: "1s" }}
						/>
						<div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
						<div
							className="w-3 h-3 bg-pink-400 rounded-full cosmic-twinkle"
							style={{ animationDelay: "2s" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
