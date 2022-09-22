import { DateTime } from 'luxon';

export function createDateArray(length: number) {
  const dates: number[] = [];

  for (let i = 0; i < length; i++) {
    dates.push(+DateTime.local().minus({ day: i }).toJSDate());
  }

  return dates.reverse();
}

export function createDateArrayDays() {
  const dates: string [] = [];

  dates.push('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Vienes', 'Sabado');

  return dates;
}

export function createDateArrayMonths() {
  const dates: string [] = [];

  dates.push('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Nov', 'Dic');

  return dates;
}
