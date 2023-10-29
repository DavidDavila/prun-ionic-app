export type PlantJsonT = {
  [key: string]: {
    imgs: string[];
    desc: {
      tipo: PlantTypesT;
      origen: string;
      crecimiento: ValueDescT;
      altura: string;
      luz: ValueDescT;
      co2: ValueDescT;
      dificultad: ValueDescT;
    };
  };
};
export type ValueDescT =
  | 'medio'
  | 'alto'
  | 'bajo'
  | 'rápido'
  | 'lento'
  | 'fácil'
  | 'media'
  | 'difícil';
export type PlantTypesT =
  | 'flotante'
  | 'tallo'
  | 'musgo'
  | 'roseta'
  | 'bulbo'
  | 'rizoma'
  | 'tapizante'
  | 'estolones';
