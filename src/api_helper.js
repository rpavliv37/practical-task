import { Observable } from 'rxjs';

export const handleError = (error) => (
  error.response && error.response.data
    ? Observable.of(`${error.response.data.message}`)
    : Observable.of(`${error}`)
);

export const handleErrorDetailed = (error) => (
  error.response && error.response.data
    ? Observable.of({
      error: true,
      message: `${error.response.data.message}`
    })
    : Observable.of({
      error: true,
      message: `${error}`
    })
);