import Papa from "papaparse";

import { MASTER_CHARACTER } from "./config";

export interface Character {
    MasterCharacterID: number;
    ItemID: number;
    BreedID: number;
    NationId: number;
    MasterCharacterNum: number;
    Nickname: string;
    SelfIntroduction: string;
    Rarity: number;
    Material: number;
    MasterGiftGroupID: number;
    AbilityID1: number;
    AbilityID2: number;
    AbilityID3: number;
    BattleSkillID: number;
    BattleSkillID2: number;
    unknown_field_1: number;
    HPisLV1: number;
    HPisLV99: number;
    OffenseisLV1: number;
    OffenseisLV99: number;
    DefenseisLV1: number;
    DefenseisLV99: number;
    SpeedisLV1: number;
    SpeedisLV99: number;
    maxHitPointBonus: number;
    maxAttackBonus: number;
    maxDefenseBonus: number;
    secondMaxHitPointBonus: number;
    secondMaxAttackBonus: number;
    secondMaxDefenseBonus: number;
    SaleGameMoney: number;
    MasterCharacterLVGroup: number;
    MasterCharacterSecondLVGroup: number;
    EvolveCharacterId: number;
    MaxEvolveFlag: number;
    PartySetEnableFlag: number;
    FavorabilityBonusHitPoint: number;
    FavorabilityBonusOffense: number;
    FavorabilityBonusDefense: number;
    MasterCharacterBookID: number;
    MasterCharacterBookOrderNum: number;
    FavorabilityEnable: number;
    favorabilitySecondBonusHitPoint: number;
    favorabilitySecondBonusOffense: number;
    favorabilitySecondBonusDefense: number;
    favorabilitySecondEnableFlag: number;
    FloweringCharacterID: number;
    MaxFloweringFlag: number;
    FloweringEnableFlag: number;
    Fullname: string;
    OnlyPerformanceFloweringEnableFlag: number;
    dressName: string | null;
    readingCharacterName: string;
    samePersonId: number;
    isImportant: number;
    isEventCharacter: number;
    createDate: string;
    unknown_field_2: string;
    unknown_field_3: number;
    swfVersion: string;
    rarityEvolutionTypeId: number;
    MaxRarityGlowFlag: number;
    RarityGlowEnableFlag: number;
    publicationDate: string | null;
}

export const getMasterCharacter = async () => {
    const response = await fetch(MASTER_CHARACTER);
    const csv = await response.text();
    const data = Papa.parse(csv, { header: true, dynamicTyping: true });

    return data.data as Character[];
};
