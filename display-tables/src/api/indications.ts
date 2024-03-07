import axios from 'axios';
import {
  ChangeIndicationInterface,
  IndicationInterface,
} from '../interfaces/indication';

export function getIndicationMonth({
  month,
  year,
}: {
  month: string;
  year: string;
}) {
  // console.log(23, month, year);
  return axios
    .get(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/indications?&filter=yearId%7C%7C%24eq%7C%7C${year}&filter=monthId%7C%7C%24eq%7C%7C${month}`
    )
    .then(function (response) {
      return response;
    });
}

export function createRowIndication({
  dataIndication,
}: {
  dataIndication: IndicationInterface;
}) {
  return axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/indications`, dataIndication)
    .then((res) => res.data);
}

export function changeIndication({
  dataChangeIndication,
}: {
  dataChangeIndication: ChangeIndicationInterface;
}) {
  //   console.log('dataChangeIndication', dataChangeIndication);
  return axios
    .patch(
      `${import.meta.env.VITE_BACKEND_URL}/indications/${
        dataChangeIndication.id
      }`,

      dataChangeIndication
    )
    .then((res) => res.data);
}

export function getIndicationDtek() {
  return axios
    .get(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/parsings?company=Orel&dataSupplier=Dtek`
    )
    .then(function (response) {
      return response;
    });
}
