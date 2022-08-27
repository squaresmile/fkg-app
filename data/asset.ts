import md5 from "md5";

import { BASE_ASSET_URL } from "./config";

export const getAssetUrl = (assetPath: string, extension = ".bin"): string => {
    const splittedPath = assetPath.split("/"),
        parentPath = splittedPath.slice(0, splittedPath.length - 1).join("/"),
        assetHash = md5(splittedPath[splittedPath.length - 1]);
    return BASE_ASSET_URL + parentPath + "/" + assetHash + extension;
};
