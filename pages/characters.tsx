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
            <Table>
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Rarity</th>
                        <th className="text-center">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {characters
                        .filter(
                            (char) =>
                                char.MaxEvolveFlag === 0 &&
                                char.MaxFloweringFlag === 0
                        )
                        .map((char) => (
                            <tr key={char.MasterCharacterID}>
                                <td>{char.MasterCharacterID}</td>
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
