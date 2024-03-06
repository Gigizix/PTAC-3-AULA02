import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <Link href="https://ead.ifms.edu.br/">
            <Imagem
            width={120}
            height={100}
            src={"https://cursoslivres.ifms.edu.br/pluginfile.php/363023/course/overviewfiles/bg_moodle_basico_educadores.jpg"}
            />
            </Link>
            
        </footer>
    );
}