import { WordGender } from './enums';

export class Noun {
    public rank: number;
    public word: string;
    public gender: WordGender;
    public animate: boolean;
    public sNom: string;
    public sGen: string;
    public sDat: string;
    public sAcc: string;
    public sInst: string;
    public sPrep: string;
    public pNom: string;
    public pGen: string;
    public pDat: string;
    public pAcc: string;
    public pInst: string;
    public pPrep: string;
    public en: string;
}
