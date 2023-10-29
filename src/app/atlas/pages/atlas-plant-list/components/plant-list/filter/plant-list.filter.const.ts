import { GeneralFilterT } from 'src/app/shared/modules/filter/constans/filter.const';
export const atlasPlantListFilter: GeneralFilterT = {
  order: ['dificultad', 'luz', 'co2', 'crecimiento', 'tipo'],
  filters: {
    dificultad: [
      { label: 'fácil', type: 'checkbox', value: true },
      { label: 'media', type: 'checkbox', value: true },
      { label: 'difícil', type: 'checkbox', value: true },
    ],
    luz: [
      { label: 'baja', type: 'checkbox', value: true },
      { label: 'media', type: 'checkbox', value: true },
      { label: 'alta', type: 'checkbox', value: true },
    ],
    co2: [
      { label: 'bajo', type: 'checkbox', value: true },
      { label: 'medio', type: 'checkbox', value: true },
      { label: 'alto', type: 'checkbox', value: true },
    ],
    crecimiento: [
      { label: 'lento', type: 'checkbox', value: true },
      { label: 'medio', type: 'checkbox', value: true },
      { label: 'rápido', type: 'checkbox', value: true },
    ],
    tipo: [
      { label: 'flotante', type: 'checkbox', value: true },
      { label: 'tallo', type: 'checkbox', value: true },
      { label: 'musgo', type: 'checkbox', value: true },
      { label: 'roseta', type: 'checkbox', value: true },
      { label: 'bulbo', type: 'checkbox', value: true },
      { label: 'rizoma', type: 'checkbox', value: true },
      { label: 'tapizante', type: 'checkbox', value: true },
      { label: 'estolones', type: 'checkbox', value: true },
    ],
  },
};
