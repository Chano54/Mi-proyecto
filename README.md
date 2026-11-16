# Mi-proyecto

## Al Toque (nombre temporal)

App web para pedir tragos en discotecas sin hacer cola: el cliente escanea un QR, pide y paga desde su celular, la barra recibe el pedido y, cuando está listo, el cliente recibe un aviso para ir a recogerlo.

La demo está en `al-toque/index.html` (un solo archivo, sin instalar nada). Tiene 3 vistas conectadas en vivo:

- `#cliente`: carta, carrito, pago (simulado) y seguimiento del pedido con aviso (sonido y vibración).
- `#barra`: pedidos nuevos, en preparación y listos para recoger, con código de verificación.
- `#dueno`: ventas de la noche, lo más pedido, espera promedio, comisión, y edición de carta y precios.
- `#demo`: las 3 vistas juntas (en celular, con pestañas).

Por ahora los datos se guardan en el navegador (sirve para mostrar la demo en un solo equipo). Para usarla en un local de verdad falta un servidor que conecte varios celulares y una pasarela de pago real.
