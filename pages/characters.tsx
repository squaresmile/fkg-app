import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { Character, getMasterCharacter } from "../data/master";

const CharactersPage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    useEffect(() => {
        getMasterCharacter().then((c) => setCharacters(c));
    }, []);

    return (
        <>
            <Head>
                <title>FKG Characters</title>
                <meta
                    name="description"
                    content="Flower Knight Girl Character List"
                />
            </Head>
            <Table>
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Book ID</th>
                        <th className="text-center">Rarity</th>
                        <th className="text-center">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {characters
                        .filter(
                            (char) =>
                                char.MaxEvolveFlag === 0 &&
                                char.MaxFloweringFlag === 0 &&
                                char.PartySetEnableFlag === 1
                        )
                        .sort(
                            (a, b) =>
                                a.MasterCharacterBookID -
                                b.MasterCharacterBookID
                        )
                        .map((char) => (
                            <tr key={char.MasterCharacterID}>
                                <td>{char.MasterCharacterID}</td>
                                <td>{char.MasterCharacterBookID}</td>
                                <td>{char.Rarity}</td>
                                <td>
                                    <Link
                                        href={`/character/${char.MasterCharacterID}`}
                                    >
                                        <a
                                            className="text-decoration-none"
                                            lang="ja-JP"
                                        >
                                            {char.Fullname}
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
};

export default CharactersPage;
