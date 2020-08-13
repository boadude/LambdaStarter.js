import { createLogger, format, transports } from 'winston';

const Logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [new transports.Console()],
});

export default Logger;
