import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
    title={"Nosotros"}
    description="sobre nosotros , GuitarraLa , tienda de musica "
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/> 
          <div>
             
           <p>Donec dui lorem, commodo a volutpat ut, efficitur ac sapien. Donec suscipit a ex vel dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate tempus rhoncus. Pellentesque sit amet arcu eu ex tristique tincidunt. Proin eget ornare mi. Curabitur convallis dui ultrices, semper lorem sit amet, eleifend augue. Quisque nisi ex, mollis tincidunt hendrerit sit amet, aliquet et justo. Suspendisse sed egestas purus.  </p>

           <p>Nullam id dui congue diam mollis tincidunt. Quisque fringilla enim a sem gravida, congue tristique neque mollis. In non facilisis quam. Aliquam sit amet tortor tempor, vehicula ligula et, blandit lorem. Aliquam leo orci, porttitor in auctor sed, semper non nisl. Mauris a nunc sed eros ultrices laoreet non vitae est. Pellentesque semper velit eget ex feugiat aliquet.  </p>
           
          </div>
        </div>
      </main>
    </Layout>

  
  )
}
