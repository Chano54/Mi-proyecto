# Investigación: costos y requisitos de WhatsApp (Meta) para el agente de clínicas

Fecha: 14 de noviembre de 2026. Datos tomados de la documentación de Meta para desarrolladores y de proveedores oficiales. Antes de cobrar, volver a revisar la tabla de precios oficial de Meta, porque cambia seguido.

## 1. Cómo cobra Meta (desde el 1 de octubre de 2026)

- Meta cobra **por cada mensaje que envía la clínica**, no por conversación.
- Los mensajes que **manda el paciente** son gratis.
- Las **respuestas dentro de las 24 horas** desde el último mensaje del paciente ("mensajes de servicio"): cada número de WhatsApp tiene **1,000 gratis al mes**. Desde el mensaje 1,001 se cobran. Los que no se usan no pasan al mes siguiente.
- Precio en Perú (utilidad, y servicio pasando los 1,000): **~US$ 0.03 por mensaje** (antes era US$ 0.02).
- Mensajes de **marketing** (promociones): ~US$ 0.07 por mensaje, según calculadoras de terceros. Sin confirmar en la tabla oficial.
- Si la cuenta **no tiene tarjeta registrada**, Meta entrega los 1,000 gratis y después deja de enviar las respuestas.
- No hay pago mensual fijo por usar la API de Meta, solo el cobro por mensaje.

### Ejemplo de costo para una clínica
| Clínica | Chats al día | Mensajes del bot al mes (aprox. 6 por chat) | Pagados (menos 1,000 gratis) | Costo al mes |
|---|---|---|---|---|
| Pequeña | 15 | ~2,700 | ~1,700 | ~US$ 51 (~S/ 180) |
| Mediana | 50 | ~9,000 | ~8,000 | ~US$ 240 (~S/ 840) |

Para gastar menos: que el bot mande **menos mensajes y más completos** (todo en uno, con botones o listas).

## 2. Qué se necesita para la cuenta

1. Cuenta de Facebook y un "portafolio de negocio" en Meta (gratis).
2. Una app de desarrollador en Meta (gratis). Meta da un **número de prueba gratis** y sin tarjeta para hacer pruebas.
3. Para usarlo con clientes reales: un número de teléfono, verificado por SMS o llamada, con verificación en dos pasos activada.
4. Verificación del negocio con datos legales (en Perú: RUC y razón social, documentos de SUNAT o SUNARP). Sin verificar se puede empezar, pero con límites.
5. Tarjeta registrada en la cuenta para pagar los mensajes.
6. "Coexistencia": la clínica puede seguir usando su número de WhatsApp Business de siempre y conectarlo al bot, sin cambiar de número.

## 3. Reglas de Meta para bots con IA

Desde el 15 de enero de 2026 Meta prohíbe los asistentes de IA "para todo" (que responden cualquier tema). Sí permite bots de un negocio para tareas concretas: agendar citas, atención al cliente, responder dudas del negocio. El agente debe hablar solo de la clínica.

## Fuentes
- https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
- https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages
- https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts/
- https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration
- https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview
- https://partner-docs.gupshup.io/changelog/october-2026
- https://kom.pe/whatsapp-business-api-precio-peru/
- https://leadsales.io/blog/verificar-negocio-meta-business-para-usar-api/
- https://monochat.ai/blog/whatsapp-ai-chatbot-policy-2026
