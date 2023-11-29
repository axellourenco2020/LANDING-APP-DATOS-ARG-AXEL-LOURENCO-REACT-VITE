export interface Results {
  timelines: Timelines
  location: Location
}

export interface Location {
  lat: number
  lon: number
  name: string
  type: string
}

export interface Timelines {
  daily: Daily[]
}

export interface Daily {
  time: string
  values: Values
}

export interface Values {
  cloudBaseAvg: number
  cloudBaseMax: number
  cloudBaseMin: number
  cloudCeilingAvg: number
  cloudCeilingMax: number
  cloudCeilingMin: number
  cloudCoverAvg: number
  cloudCoverMax: number
  cloudCoverMin: number
  dewPointAvg: number
  dewPointMax: number
  dewPointMin: number
  evapotranspirationAvg: number
  evapotranspirationMax: number
  evapotranspirationMin: number
  evapotranspirationSum: number
  freezingRainIntensityAvg: number
  freezingRainIntensityMax: number
  freezingRainIntensityMin: number
  humidityAvg: number
  humidityMax: number
  humidityMin: number
  iceAccumulationAvg: number
  iceAccumulationLweAvg: number
  iceAccumulationLweMax: number
  iceAccumulationLweMin: number
  iceAccumulationLweSum: number
  iceAccumulationMax: number
  iceAccumulationMin: number
  iceAccumulationSum: number
  moonriseTime: string
  moonsetTime: string
  precipitationProbabilityAvg: number
  precipitationProbabilityMax: number
  precipitationProbabilityMin: number
  pressureSurfaceLevelAvg: number
  pressureSurfaceLevelMax: number
  pressureSurfaceLevelMin: number
  rainAccumulationAvg: number
  rainAccumulationLweAvg: number
  rainAccumulationLweMax: number
  rainAccumulationLweMin: number
  rainAccumulationMax: number
  rainAccumulationMin: number
  rainAccumulationSum: number
  rainIntensityAvg: number
  rainIntensityMax: number
  rainIntensityMin: number
  sleetAccumulationAvg: number
  sleetAccumulationLweAvg: number
  sleetAccumulationLweMax: number
  sleetAccumulationLweMin: number
  sleetAccumulationLweSum: number
  sleetAccumulationMax: number
  sleetAccumulationMin: number
  sleetIntensityAvg: number
  sleetIntensityMax: number
  sleetIntensityMin: number
  snowAccumulationAvg: number
  snowAccumulationLweAvg: number
  snowAccumulationLweMax: number
  snowAccumulationLweMin: number
  snowAccumulationLweSum: number
  snowAccumulationMax: number
  snowAccumulationMin: number
  snowAccumulationSum: number
  snowIntensityAvg: number
  snowIntensityMax: number
  snowIntensityMin: number
  sunriseTime: string
  sunsetTime: string
  temperatureApparentAvg: number
  temperatureApparentMax: number
  temperatureApparentMin: number
  temperatureAvg: number
  temperatureMax: number
  temperatureMin: number
  uvHealthConcernAvg: number
  uvHealthConcernMax: number
  uvHealthConcernMin: number
  uvIndexAvg: number
  uvIndexMax: number
  uvIndexMin: number
  visibilityAvg: number
  visibilityMax: number
  visibilityMin: number
  weatherCodeMax: number
  weatherCodeMin: number
  windDirectionAvg: number
  windGustAvg: number
  windGustMax: number
  windGustMin: number
  windSpeedAvg: number
  windSpeedMax: number
  windSpeedMin: number
}

export interface HolidaysResults {
  motivo: string
  tipo: Tipo
  info: string
  dia: number
  mes: number
  id: string
  original?: string
}

export enum HolidayType {
  Inamovible = 'inamovible',
  Puente = 'puente',
  Trasladable = 'trasladable',
}

export interface DolarResults {
  casa: Dolar
}

export interface Dolar {
  nombre: string
  compra: string
  venta: string
  agencia: string
  observaciones: object
  geolocalizacion?: Geolocalizacion
  telefono?: object | string
  direccion?: object | string
  decimales: string
}

export interface Geolocalizacion {
  latitud: object | string
  longitud: object | string
}

export interface UtilDate {
  name: string
  date: Date
}

/* TYPES FROM BUENOS AIRES API */
/*
export interface Subte {
  subtes: SubteElement[]
}

export interface SubteElementFromFetch {
  nombre: string
  estado: string[]
  frecuencia: string
}

export interface SubteElement {
  nombre: string
  estado: string
  frecuencia: string
} */

export interface Subtes {
  page: string
  subte: Subte[]
  actualizado: string
}

export interface Subte {
  nombre: string
  estado: string
}
