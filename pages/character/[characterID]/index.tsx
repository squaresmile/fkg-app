import Link from "next/link";
import { useRouter } from "next/router";

const CharacterPage = () => {
    const router = useRouter();
    const characterID = router.query.characterID as string;

    return (
        <div>
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
        </div>
    );
};

export default CharacterPage;
