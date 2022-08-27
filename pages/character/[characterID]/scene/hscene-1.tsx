import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import {
    CharacterScene,
    getCharacterScript,
    parseScript,
    ScriptLine,
} from "../../../../data/scene";

const ScriptRow = ({ line }: { line: ScriptLine }) => {
    switch (line.type) {
        case "mess":
            return (
                <>
                    <td lang="ja-JP" className="text-center">
                        {line.speakerName}
                    </td>
                    <td lang="ja-JP" style={{ whiteSpace: "pre-wrap" }}>
                        {line.message.replaceAll("\\n", "\n")}
                    </td>
                    <td>
                        {line.voiceLineName !== undefined ? (
                            <audio
                                controls
                                preload="none"
                                src={line.voiceLineUrl}
                            />
                        ) : null}
                    </td>
                </>
            );

        case "image":
            return (
                <>
                    <td className="text-center">Image</td>
                    <td>
                        <img
                            src={line.imageUrl}
                            alt={line.imageName}
                            style={{ maxWidth: "500px" }}
                        />
                    </td>
                    <td></td>
                </>
            );
    }

    return null;
};

const ScriptTable = ({ lines }: { lines: ScriptLine[] }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th className="text-center">Speaker</th>
                    <th className="text-center">Message</th>
                    <th className="text-center">Voice</th>
                </tr>
            </thead>
            <tbody>
                {lines.map((line, i) => (
                    <tr key={i}>
                        <ScriptRow line={line} />
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export const HScenePage = ({ sceneType }: { sceneType: CharacterScene }) => {
    const router = useRouter();
    const characterID = router.query.characterID as string;

    const [script, setScript] = useState("");
    useEffect(() => {
        if (characterID) {
            getCharacterScript(parseInt(characterID), sceneType).then(
                (script) => setScript(script)
            );
        }
    }, [characterID]);

    if (script === "") return null;

    return (
        <div>
            <ScriptTable lines={parseScript(script)} />
        </div>
    );
};

const HScene1Page = () => <HScenePage sceneType="HScene1" />;

export default HScene1Page;
