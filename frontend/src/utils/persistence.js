import Basil from 'basil.js'

const basilOptions = {
  namespace: 'fxcore',
  storages: ['local', 'cookie'],
  expireDays: 2
};

export const basil = new window.Basil(basilOptions)
