import { DataOrel } from '../parsing/parsing.dtekOrel.interface';
import { DataMegan } from '../parsing/parsing.dtekMegan.interface';
export declare const getDataDtek: (company: string) => Promise<DataOrel | DataMegan>;
