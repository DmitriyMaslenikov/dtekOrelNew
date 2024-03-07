export interface IndicationInterface {
  id: string;
  monthId: string;
  yearId: string;
  orelDay: number;
  orelNight: number;
  minerDay: number;
  minerNight: number;
  housingWorkerDay: number;
  housingWorkerNight: number;
}

export interface ChangeIndicationInterface {
  id: string;
  orelDay?: number | undefined;
  orelNight?: number | undefined;
  minerDay?: number | undefined;
  minerNight?: number | undefined;
  housingWorkerDay?: number | undefined;
  housingWorkerNight?: number | undefined;
}
