import pako from "pako";

import { getAssetUrl } from "./asset";

export type CharacterScene = "Summon" | "HScene1" | "HScene2";

export const getCharacterScript = async (
    characterID: number,
    sceneType: CharacterScene
): Promise<string> => {
    let assetPath: string;
    switch (sceneType) {
        case "Summon":
            assetPath = `event/new/new_${characterID}`;
            break;
        case "HScene1":
            assetPath = `event/hscene_r18/hscene_r18_${characterID}`;
            break;
        case "HScene2":
            assetPath = `event/hscene_r18/hscene_r18_${characterID}_2`;
            break;
    }

    const response = await fetch(getAssetUrl(assetPath));
    const data = await response.arrayBuffer();
    const decompressed = pako.inflate(new Uint8Array(data));

    return new TextDecoder("utf-8").decode(decompressed);
};

export type ScriptLineType = "mess" | "effect" | "image";

export type ScriptLineMessage = {
    type: "mess";
    speakerName?: string;
    message: string;
    voiceLineName?: string;
    voiceLineUrl?: string;
};

export type ScriptLineImage = {
    type: "image";
    imageName: string;
    imageUrl: string;
};

export type ScriptLineUnknown = {
    type: "unknown";
    line: string;
    splitted: string[];
};

export type ScriptLine =
    | ScriptLineMessage
    | ScriptLineImage
    | ScriptLineUnknown;

export const parseScript = (script: string): ScriptLine[] => {
    return script.split("\r\n").map((line) => {
        const splitted = line.split(",");
        switch (splitted[0]) {
            case "mess":
                return {
                    type: "mess",
                    speakerName: splitted[1] !== "" ? splitted[1] : undefined,
                    message: splitted[2],
                    voiceLineName: splitted[3] !== "" ? splitted[3] : undefined,
                    voiceLineUrl:
                        splitted[3] !== "" && splitted[3] !== undefined
                            ? getAssetUrl(`voice/c/${splitted[3]}`, ".mp3")
                            : undefined,
                };
            case "image":
                return {
                    type: "image",
                    imageName: splitted[1],
                    imageUrl: getAssetUrl(`ultra/images/${splitted[1]}`),
                };
            default:
                return {
                    type: "unknown",
                    line,
                    splitted,
                };
        }
    });
};
