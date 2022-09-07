import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const CharacterPage = () => {
    const router = useRouter();
    const characterID = router.query.characterID as string;

    return (
        <>
            <Head>
                <title>FKG Character {characterID}</title>
                <meta
                    name="description"
                    content={`Flower Knight Girl Character ${characterID}`}
                />
            </Head>
            <h1>Character {characterID}</h1>
            <b>Scenes</b>
            <ul>
                <li>
                    <Link href={`${characterID}/scene/summon`}>
                        <a className="text-decoration-none">Summon</a>
                    </Link>
                </li>
                <li>
                    <Link href={`${characterID}/scene/hscene-1`}>
                        <a className="text-decoration-none">H Scene 1</a>
                    </Link>
                </li>
                <li>
                    <Link href={`${characterID}/scene/hscene-2`}>
                        <a className="text-decoration-none">H Scene 2</a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default CharacterPage;
