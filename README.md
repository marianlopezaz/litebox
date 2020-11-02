# MARIANO LOPEZ - LITEBOX CHALLENGE #
La aplicación consiste en el desarrollo propuesto en: https://gitlab.com/egarmendia/liteflix-test-2
Se agregó además una sección de "Agregados recientemente" para poder visualizar las películas que se cargan desde el modal.

# ESTRUCTURA DE LA APP #
Frontend: Desarrollado en NextJs.
Backend: Desarrollado con ExpressJs e integrando con AWS S3 para el guardado de los documentos

## Iniciación del repo
- Para levantar el repo de manera local, se debe clonar el mismo y ejecutar: 
  ```
  $ yarn install
  ```
  ```
  $ yarn dev
  ```

## Detalle de las dependencias que tiene
* Material Ui: Material ui completo con las sub-dependencias de iconos, lab y pickers para los datetimes y times.
* date-fns y locale: Para tener la fecha local de donde se quiera y usarlo para los pickers
* bootstrap y react-bootstrap: leer doc de react-bootstrap (https://react-bootstrap.github.io/).
* swr: libreria para hacer el manejo de la data de las pegadas a la pai en la vista, caching de la data y mutación (https://github.com/vercel/swr).
* axios: libreria para hacer las pegadas a la api (https://github.com/axios/axios).
* mui-datatables: libreria bien completa para tablas (https://github.com/gregnb/mui-datatables).
* redux, react-redux, redux-thunk: para manejar redux en la app. No incluir en el app si no se quiere manejar o borrar las librerias en el package del repo clonado.
* framer-motion: libreria para manejar animaciones entre páginas y componentes (https://www.framer.com/api/motion/).
* nprogress: libreria para menejar la barra del loading entre páginas (http://ricostacruz.com/nprogress/).
* react-s-alert: libreria para menejar los alerts de error o success (https://github.com/juliancwirko/react-s-alert).


###### Desarrollado por @mariano1424