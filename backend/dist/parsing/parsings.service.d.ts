import { DataOrel } from './parsing.dtekOrel.interface';
import { DataMegan } from './parsing.dtekMegan.interface';
export declare class ParsingsService {
    getData: (dataSupplier: string, company: string) => Promise<DataOrel | DataMegan> | "" | Promise<import("./parsing.yasnoOrel.interface").DataOrelYasno>;
}
