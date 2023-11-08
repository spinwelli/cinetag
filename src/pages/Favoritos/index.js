import Card from 'components/Card';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Banner from 'components/Banner';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos ({ children }) {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo><h1>Meus Favoritos:</h1></Titulo>
            <section className={styles.favoritos}>
                {favorito.map((fav) => {
                    return <Card {...fav} key = {fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;
