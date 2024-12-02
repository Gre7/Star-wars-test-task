import { isRejected } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

/**
 * Log data from error
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejected()(action)) {
      const { error, status, message } = (action.payload as any).data;

      // eslint-disable-next-line no-console
      console.error('error: ', error, 'status: ', status, 'message: ', message);
    }
    return next(action);
  };
