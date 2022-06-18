import * as _ from 'lodash';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    //@ts-ignore
    const status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const payload = {
      statusCode: status,
      name: exception.name,
      message: exception.message || 'Error',
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    this.parseValidationErrors(exception, payload);

    response.status(status).json(payload);
  }

  private parseValidationErrors(err: any, payload: any) {
    if (err.status && err.status === 400) {
      const instancePath = _.get(err, 'errors.0.instancePath');
      const message = _.get(err, 'errors.0.message');
      // Handle ajv errors
      if (Array.isArray(err.errors)) {
        payload.details = err.errors;
        payload.message = `Validation error: "${instancePath}" ${message}`;
      }
    }
  }
}
