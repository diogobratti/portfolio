import type { NextPage } from "next";
import Link from "next/link";

const Livros: NextPage = () => {
    return (
        <>
            <div className="flex flex-col grow items-center">
                <Link href="/documents/livros/Algorithms-Dasgupta-Papadimitriou-Vazirani.pdf">Algorithms - Dasgupta Papadimitriou Vazirani</Link>
                <Link href="/documents/livros/As_Armas_da_Persuasao_-_Robert_B_Cialdini.pdf">As Armas da Persuasao - Robert B. Cialdini</Link>
                <Link href="/documents/livros/Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf">Cracking the Coding Interview 6th Edition</Link>
                <Link href="/documents/livros/Ponto_de_Inflexao_-_Flavio_Augusto_da_Silva.pdf">Ponto de Inflexao - Flavio Augusto da Silva</Link>
            </div>
        </>
    )
}

export default Livros;