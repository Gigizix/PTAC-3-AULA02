import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <Imagem
            width={100}
            height={100}
            src={"https://www.ifms.edu.br/marcaifms.png"}/>
            <h1>Menu</h1>
            <nav>
                <ul className={styles.lista}>
                    <Link href
                    ="/">
                    <li>Home</li>
                </Link>
                <Link href="/registro">
                    <li>Registrar</li>
                </Link>
                <Link href="/localizacao">
                        <li>Localizacao</li>
                    </Link>
</ul>
</nav>
</header>
    );
}