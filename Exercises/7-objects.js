'use strict';

const fn = () => {
  const obj1 = {
    name: 'Tom',
  };

  let obj2 = {
    name: 'Jerry',
  };

  obj1.name = 'Jerry';
  obj2.name = 'Tom';

  obj2 = {
    name: 'Bob',
  };
};

/* Объяснение:
 *
 * В поля передается скалярное значение.
 *
 * Изменить obj1 нельзя, т.к. невозможно присвоить константе новое значение.
 */

module.exports = { fn };
