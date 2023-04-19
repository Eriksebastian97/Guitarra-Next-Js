import Image from "next/image";
import Link from "next/link"; //en next a link no se le puede agregar un classname
import { useRouter } from "next/router";
import styles from "../styles/header.module.css"; // en este caso styles es un objeto y no va a marcar errores en el codigo css , estan limitados por el scope tambien en donde se estan utilzando...

export default function Header() {
  const router = useRouter(); //resaltar la pagina actual

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image
          src="/img/logo.svg"
          width={300}
          height={40}
          alt="Imagen Logo tipo"
        />

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>

          <Link className={router.pathname === "/nosotros" ? styles.active : ""} href="/nosotros">Nosotros</Link>

          <Link className={router.pathname === "/tienda" ? styles.active : ""} href="/tienda">Tienda</Link>

          <Link  className={router.pathname === "/blog" ? styles.active : ""} href="/blog">Blog</Link>
          
           <Link href="/carrito">
               
               <Image width={30} height={25} src="/img/carrito (1).png" alt="imagen carrito" />
           </Link>   
          
        </nav>
      </div>
    </header>
  );
}
