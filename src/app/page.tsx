import { ChevronRight } from "lucide-react";

export default function Home() {
	return (
		<div className="text-white">
			<img
				className="-z-20 bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-full max-[600px]:max-w-full max-[600px]:max-h-full"
				src="images/netflix_bg.png"
				alt=""
			/>
			<div className="-z-10 absolute top-0 w-full max-[600px]:w-screen h-screen scale-y-150 bg-black opacity-70"></div>
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
					<button className="bg-red px-5 py-2 rounded-md text-[14px]">Entrar</button>
				</div>
			</header>
			<main className="flex flex-col justify-center items-center">
				<div className="mt-44 max-[600px]:mt-16 mb-48 w-screen">
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
						<button className="bg-red px-[24px] py-[16px] rounded-md flex gap-1">
							<strong className="text-[18px]">Vamos lá!</strong> <ChevronRight />
						</button>
					</form>
				</div>
				<div className="flex justify-center items-center w-full py-32 bg-black">
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
				</div>
			</main>
		</div>
	);
}
