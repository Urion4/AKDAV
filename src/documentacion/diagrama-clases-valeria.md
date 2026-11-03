# Diagrama de clases: Módulo de pedidos

Clases del módulo:
- Usuario (Entity)
- Producto (Entity)
- Pedido (Entity)
- GestorPedidos (Control)

Relaciones:
- Un Usuario realiza 0..* Pedidos.
- Un Pedido contiene 1..* Productos.
- GestorPedidos coordina Pedido, valida el saldo del Usuario y actualiza el stock del Producto.

Autora: Valeria Michell Martínez Hernández