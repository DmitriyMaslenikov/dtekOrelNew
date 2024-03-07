import axios from 'axios';
import { ChangeCheckInterface, CheckInterface } from '../interfaces/checks';

export function getCheckMonth({
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
      }/checks?&filter=yearId%7C%7C%24eq%7C%7C${year}&filter=monthId%7C%7C%24eq%7C%7C${month}`
    )
    .then(function (response) {
      return response;
    });
}

export function createRowCheck({ dataCheck }: { dataCheck: CheckInterface }) {
  return axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/checks`, dataCheck)
    .then((res) => res.data);
}

export function changeCheck({
  dataChangeCheck,
}: {
  dataChangeCheck: ChangeCheckInterface;
}) {
  //   console.log('dataChangeIndication', dataChangeIndication);
  return axios
    .patch(
      `${import.meta.env.VITE_BACKEND_URL}/checks/${dataChangeCheck.id}`,

      dataChangeCheck
    )
    .then((res) => res.data);
}
export function getCheckYasno() {
  return axios
    .get(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/parsings?company=Orel&dataSupplier=Yasno`
    )
    .then(function (response) {
      return response;
    });
}
