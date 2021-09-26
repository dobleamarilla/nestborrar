import { CajaClase } from '../src/caja/caja.clase';
// import { client } from '../conexion/mongodb';
describe('Caja', () => {
  const cajaInstance = new CajaClase();

  it('should be defined', () => {
    expect(cajaInstance).toBeDefined();
  });

  it('getInfoCaja', () => {    
    cajaInstance.getInfoCaja().then((caja) => {
      if (caja != null) {
        expect(caja._id).toEqual("CAJA");
      } else {
        expect(caja).toEqual(null);
      }
      // 
      expect.assertions(1);
    });
  });
});

// afterAll(() => {
  
// });