"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<div className="text-white">
			<img
				className="-z-[3] bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-full max-[600px]:max-w-full max-[600px]:max-h-full"
				src="images/netflix_bg.png"
				alt=""
			/>
			<div className="-z-[2] bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-full max-[600px]:max-w-full max-[600px]:max-h-full bg-black opacity-70"></div>
			<header className="flex justify-between items-center mx-44 max-[600px]:mx-3 my-5">
				<img className="w-32 max-[600px]:w-24" src="images/icon.png" alt="" />
				<div className="flex gap-7 max-[600px]:gap-2">
					<select
						className="bg-black opacity-70 rounded-md px-5 max-[600px]:px-2 border-2 text-[14px] border-zinc-600"
						name="lang"
						id="lang-select"
					>
						<option value="pt">Português</option>
						<option value="en">English</option>
					</select>
					<button
						onClick={() => {
							router.push("/login");
						}}
						className="bg-red hover:bg-red_hover px-5 py-2 rounded-md text-[14px]"
					>
						Entrar
					</button>
				</div>
			</header>
			<main className="flex flex-col justify-center items-center">
				<div className="mt-44 max-[600px]:mt-16 mb-48">
					<h1 className="text-center">
						<strong className="text-[48px] max-[600px]:text-[38px]">
							Filmes, séries e muito mais, sem limites
						</strong>
					</h1>
					<h2 className="text-center text-[24px] m-[16px] text-zinc-300">
						Assista onde quiser. Cancele quando quiser.
					</h2>
					<h2 className="text-center text-[20px] m-2 text-zinc-300">
						Quer assistir? Informe seu email para criar ou reiniciar sua assinatura
					</h2>

					<form
						className="flex flex-row max-[600px]:flex-col my-2 items-center justify-center gap-2"
						action=""
						method="post"
					>
						<input
							className="px-[24px] py-[16px] w-[450px] max-[600px]:w-[350px] rounded-md bg-black opacity-70 border-2"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
						/>
						<button className="bg-red hover:bg-red_hover px-[24px] py-[16px] rounded-md flex gap-1">
							<strong className="text-[18px]">Vamos lá!</strong> <ChevronRight />
						</button>
					</form>
				</div>
				<div className="flex -z-[1] flex-col justify-center items-center w-full py-32 bg-black">
					<div className="-mt-56 w-11/12 h-40 max-[600px]:h-48 flex flex-row justify-center items-center gap-4 m-5 bg-gradient-to-r from-dark_blue from-10% via-red via-40% to-dark_blue to-90%">
						<img width={120} src="images/popcorn.png" alt="" />
						<div>
							<h1 className="text-[22px]">
								A Netflix que você adora por apenas R$ 18,90.
							</h1>
							<p>Assine o plano Padrão com anúncios.</p>
							<a className="flex items-center my-2 underline text-blue-400" href="">
								Saiba mais <ChevronRight />
							</a>
						</div>
					</div>
					<div className="mt-10 flex flex-row max-[965px]:flex-col justify-center items-center text-center">
						<div className="flex flex-col gap-4 w-[474px] max-[430px]:w-[408px]">
							<h1 className="text-5xl sm:2xl font-bold">
								<strong>Aproveite na TV</strong>
							</h1>
							<p className="text-[20px]">
								Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos
								de Blu-ray e outros dispositivos.
							</p>
						</div>
						<div className="overflow-hidden">
							<video
								className="absolute -z-[1] max-[965px]:w-[475px] max-[430px]:w-[330px] ml-[75px] max-[430px]:ml-[40px] mt-[92px] max-[430px]:mt-[70px]"
								src="videos/video-tv-0819.mp4"
								autoPlay
								muted
								loop
							></video>
							<img src="images/tv.png" alt="" />
						</div>
					</div>
					<div className="bg-zinc-700 z-0 w-full h-3 m-14">‎</div>
					<div className="flex flex-row max-[965px]:flex-col justify-center items-center text-center">
						<div className="overflow-hidden">
							<video
								className="absolute -z-[1] w-96 max-[1090px]:w-[300px] max-[965px]:w-[385px] max-[540px]:w-[310px] max-[430px]:w-[225px] ml-[115px] max-[430px]:ml-[90px] mt-[50px]"
								src="videos/video-devices.mp4"
								autoPlay
								muted
								loop
							></video>
							<img
								className="max-[605px]:w-[600px]"
								src="images/device-pile.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col gap-4 w-[508px] max-[430px]:w-[408px]">
							<h1 className="text-5xl max-[600px]:2xl font-bold">
								<strong>Assista onde quiser</strong>
							</h1>
							<p className="text-[20px]">
								Assista a quantos filmes e séries quiser no celular, tablet, laptop e
								TV.
							</p>
						</div>
					</div>
					<div className="bg-zinc-700 z-0 w-full h-3 m-14">‎</div>
					<div className="mt-10 flex flex-row max-[965px]:flex-col justify-center items-center">
						<div className="flex flex-col gap-4 w-[474px] max-[430px]:w-[408px]">
							<h1 className="text-5xl sm:2xl font-bold">
								<strong>Crie perfis para crianças</strong>
							</h1>
							<p className="text-[20px]">
								Deixe as crianças se aventurarem com seus personagens favoritos em um
								espaço feito só para elas, sem pagar a mais por isso.
							</p>
						</div>
						<div className="overflow-hidden">
							<img src="images/infantil.png" alt="" />
						</div>
					</div>
					<div className="bg-zinc-700 z-0 w-full h-3 m-14">‎</div>
					<div className="mt-10 flex flex-row max-[965px]:flex-col justify-center items-center">
						<div className="flex flex-col gap-4 w-[474px] max-[430px]:w-[408px]">
							<h1 className="text-5xl sm:2xl font-bold">
								<strong>Baixe séries para assistir offline</strong>
							</h1>
							<p className="text-[20px]">Assista em um avião, trem ou submarino...</p>
						</div>
						<div className="overflow-hidden">
							<div className="absolute flex flex-row gap-5 z-0 w-[414px] max-[430px]:w-[300px] max-[430px]:h-[69px] p-3 border-2 bg-black rounded-lg ml-28 max-[430px]:ml-16 mt-80 max-[430px]:mt-56">
								<img className="w-[47px]" src="images/boxshot.png" alt="" />
								<div className="mt-2 max-[430px]:-mt-2 w-[280px] max-[430px]:w-[380px]">
									<h1 className="max-[430px]:text-[14px] max-[430px]:w-[140px]">
										Stranger Things
									</h1>
									<p className="text-[15px] max-[430px]:text-[12px] max-[430px]:w-[140px] text-blue-600">
										Download em andamento...
									</p>
								</div>
								<img
									className="w-[48px] h-[48px] mt-3 max-[430px]:-mt-1"
									src="videos/download-icon.gif"
									alt=""
								/>
							</div>
							<img src="images/mobile-0819.png" alt="" />
						</div>
					</div>
					<div className="bg-zinc-700 z-0 w-full h-3 m-14">‎</div>
				</div>
			</main>
		</div>
	);
}
