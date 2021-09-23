import { articulosInstance } from './articulos';

describe('Articulos', () => {
  it('should be defined', () => {
    expect(articulosInstance).toBeDefined();
  });

  it('getInfoArticulo', async () => {
    const res = await articulosInstance.getInfoArticulo(4203);
    expect(res._id).toBeDefined();
    expect(res.esSumable).toBeDefined();
    expect(res.familia).toBeDefined();
    expect(res.nombre).toBeDefined();
    expect(res.precioBase).toBeDefined();
    expect(res.precioConIva).toBeDefined();
    expect(res.tipoIva).toBeDefined();
  });
});

afterAll(() => {
  cerrarConexion();
});