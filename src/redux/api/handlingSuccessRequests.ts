import { isFulfilled } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const rtkQuerySuccessLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isFulfilled()(action)) {
      console.info(`Запрос прошел успешно!`);
    }
    return next(action);
  };
