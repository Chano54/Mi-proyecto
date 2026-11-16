# Mi-proyecto

## Al Toque (nombre temporal)

App web para pedir tragos en discotecas sin hacer cola: el cliente escanea un QR, pide y paga desde su celular, la barra recibe el pedido y, cuando está listo, el cliente recibe un aviso para ir a recogerlo.

El código está en `al-toque/index.html` (usa las librerías de `al-toque/lib/`: qrcode-generator, MIT, y jsQR, Apache-2.0). Para tener todo en un solo archivo que se pueda mandar: `python3 al-toque/build.py` → `al-toque/dist/al-toque-demo.html`.

Tiene 3 vistas conectadas en vivo:

- `#cliente`: carta, aviso de tiempo de espera según qué tan llena está la barra, carrito, pago reservado (simulado) que solo se cobra cuando la barra empieza a preparar, opción de cancelar sin cobro, y aviso con QR (sonido y vibración) cuando el pedido está listo.
- `#barra`: medidor de saturación con botón de pausa, pedidos nuevos (empezar/rechazar), en preparación y para recoger. Para entregar, el bartender escanea el QR del cliente con la cámara (un QR ya usado se rechaza); si no lee, se escribe el código de 3 letras.
- `#dueno`: ventas cobradas, lo más pedido, espera promedio, cancelados, capacidad de la barra, pausa, y edición de carta y precios.
- `#demo`: las 3 vistas juntas (en celular, con pestañas).

Por ahora los datos se guardan en el navegador (sirve para mostrar la demo en un solo equipo). Para usarla en un local de verdad falta un servidor que conecte varios celulares y una pasarela de pago real.
