describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar " " para " " con offest 33',() => {
      assert.equal(cipher.encode(33,' '),' ');
    });  

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('deberia retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar " " para " " con offest 33',() => {
      assert.equal(cipher.decode(33,' '),' ');
    });  
  });

  describe('cipher.createCipherWithOffset', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() => {
      assert.isObject(cipher.createCipherWithOffset(7),'es objeto');
        it('encode deberia ser una propiedad', () => {
          assert.Property(cipher.createCipherWithOffset(7),'encode','propiedad');
        });
        it('decode deberia ser una propiedad', () => {
          assert.property(cipher.createCipherWithOffset(7),'decode','propiedad');
        });
        describe('cipher.createCipherWithOffset().encode', () => {
          it('deberia ser una funcion', () => {
            assert.isFunction(cipher.createCipherWithOffset(7).encode,'function');
          });
          it('deberia retornar "hij" para "abc" con offset 33',() => {
            assert.equal(cipher.createCipherWithOffset(7).encode('abc'),'hij');
          });
        });
        describe('cipher.createCipherWithOffset().decode', () => {
          it('deberia ser una funcion', () => {
            assert.isFunction(cipher.createCipherWithOffset(7).decode,'function');
          });
          it('deberia retornar "abc" para "hij" con offset 33',() => {
            assert.equal(cipher.createCipherWithOffset(7).decode('hij'),'abc');
          });
        });
    });
  });
  

});

