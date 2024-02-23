import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
	return (
		<div className="flex flex-col">
			<img
				className="-z-20 bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-[140vh] max-[600px]:max-w-full max-[600px]:max-h-full"
				src="images/netflix_bg.png"
				alt=""
			/>
			<div className="-z-10 bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-[140vh] max-[600px]:max-w-full max-[600px]:max-h-full bg-black opacity-70"></div>
			<header className="flex justify-between items-center mx-44 max-[600px]:mx-3 my-5">
				<img className="w-32 max-[600px]:w-24" src="images/icon.png" alt="" />
			</header>
			<main className="flex items-center justify-center">
				<div className="w-[450px] h-[600px] bg-black bg-opacity-55 flex flex-col items-center">
					<div className="flex justify-start mb-8">
						<h1 className="text-3xl w-[314px] mt-14">
							<strong>Entrar</strong>
						</h1>
					</div>
					<div className="flex flex-col gap-5 w-[314px] mb-4">
						<input
							className="px-[24px] py-[12px] w-[312px] max-[600px]:w-[350px] rounded-md bg-black opacity-70 border-2"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
						/>
						<input
							className="px-[24px] py-[12px] w-[312px] max-[600px]:w-[350px] rounded-md bg-black opacity-70 border-2"
							type="password"
							name="password"
							id="password"
							placeholder="Senha"
						/>

						<button className="bg-red px-[120px] py-[10px] rounded-md flex gap-1 mb-2">
							<strong className="text-[18px]">Entrar</strong>
						</button>
					</div>

					<h1>Esqueceu a senha?</h1>
					<div className="mt-20 w-[314px]">
						<Checkbox id="terms" />
						<label
							htmlFor="terms"
							className="m-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Lembre-se de mim
						</label>
						<h1 className="mt-5 mb-3 text-zinc-400">
							Novo por aqui? <strong className="text-white">Assine agora.</strong>
						</h1>
						<p className="text-[12px] text-zinc-400">
							Esta página é protegida pelo Google reCAPTCHA para garantir que você não
							é um robô.{" "}
							<strong className="text-blue-500 hover:underline">Saiba mais.</strong>
						</p>
					</div>
				</div>
			</main>
			<footer className="absolute -bottom-64 left-0 right-0 px-32 py-10 bg-black bg-opacity-50">
				<h1 className="mb-5">Dúvidas? Ligue 0800 591 2876</h1>
				<div className="grid grid-cols-4 grid-rows-2 gap-5">
					<p className="text-[13px] text-zinc-400 underline">Perguntas frequentes</p>
					<p className="text-[13px] text-zinc-400 underline">Central de Ajuda</p>
					<p className="text-[13px] text-zinc-400 underline">Termos de Uso</p>
					<p className="text-[13px] text-zinc-400 underline">Privacidade</p>
					<p className="text-[13px] text-zinc-400 underline">
						Preferências de cookies
					</p>
					<p className="text-[13px] text-zinc-400 underline">
						Informações corporativas
					</p>
				</div>
			</footer>
		</div>
	);
}
