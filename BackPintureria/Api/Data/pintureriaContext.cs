using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Api.Data
{
    public partial class pintureriaContext : DbContext
    {
         public pintureriaContext()
         {
         }

        public pintureriaContext(DbContextOptions<pintureriaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Barrio> Barrios { get; set; } = null!;
        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<DetalleFactura> DetalleFacturas { get; set; } = null!;
        public virtual DbSet<Empleado> Empleados { get; set; } = null!;
        public virtual DbSet<Factura> Facturas { get; set; } = null!;
        public virtual DbSet<FormasPago> FormasPagos { get; set; } = null!;
        public virtual DbSet<Marca> Marcas { get; set; } = null!;
        public virtual DbSet<Pedido> Pedidos { get; set; } = null!;
        public virtual DbSet<Producto> Productos { get; set; } = null!;
        public virtual DbSet<Proveedor> Proveedors { get; set; } = null!;
        public virtual DbSet<TipoEmpleado> TipoEmpleados { get; set; } = null!;
        public virtual DbSet<TipoProducto> TipoProductos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;database=pintureria;uid=root;pwd=Leon1810Mysql", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.30-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb3_general_ci")
                .HasCharSet("utf8mb3");

            modelBuilder.Entity<Barrio>(entity =>
            {
                entity.HasKey(e => e.IdBarrios)
                    .HasName("PRIMARY");

                entity.ToTable("barrios");

                entity.Property(e => e.IdBarrios).HasColumnName("idBarrios");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("PRIMARY");

                entity.ToTable("cliente");

                entity.HasIndex(e => e.IdBarrios, "fk_Cliente_Barrios1_idx");

                entity.Property(e => e.IdCliente).HasColumnName("idCliente");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .HasColumnName("apellido");

                entity.Property(e => e.Dni)
                    .HasMaxLength(45)
                    .HasColumnName("dni");

                entity.Property(e => e.FechNac).HasColumnName("fech_nac");

                entity.Property(e => e.IdBarrios).HasColumnName("idBarrios");

                entity.Property(e => e.Mail)
                    .HasMaxLength(45)
                    .HasColumnName("mail");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .HasMaxLength(45)
                    .HasColumnName("telefono");

                entity.HasOne(d => d.IdBarriosNavigation)
                    .WithMany(p => p.Clientes)
                    .HasForeignKey(d => d.IdBarrios)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Cliente_Barrios1");
            });

            modelBuilder.Entity<DetalleFactura>(entity =>
            {
                entity.HasKey(e => e.IdDetalleFactura)
                    .HasName("PRIMARY");

                entity.ToTable("detalle_factura");

                entity.HasIndex(e => e.IdFactura, "fk_Detalle_Factura_Factura1_idx");

                entity.HasIndex(e => e.IdProducto, "fk_Detalle_Factura_Producto1_idx");

                entity.Property(e => e.IdDetalleFactura).HasColumnName("idDetalle_Factura");

                entity.Property(e => e.Cantidad).HasColumnName("cantidad");

                entity.Property(e => e.IdFactura).HasColumnName("idFactura");

                entity.Property(e => e.IdProducto).HasColumnName("idProducto");

                entity.Property(e => e.Importe)
                    .HasPrecision(16, 2)
                    .HasColumnName("importe");

                entity.Property(e => e.PrecioUnitario)
                    .HasPrecision(16, 2)
                    .HasColumnName("precioUnitario");

                entity.HasOne(d => d.IdFacturaNavigation)
                    .WithMany(p => p.DetalleFacturas)
                    .HasForeignKey(d => d.IdFactura)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Detalle_Factura_Factura1");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.DetalleFacturas)
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Detalle_Factura_Producto1");
            });

            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.HasKey(e => e.IdEmpleado)
                    .HasName("PRIMARY");

                entity.ToTable("empleado");

                entity.HasIndex(e => e.IdTipoEmpleado, "fk_Empleado_Tipo_Empleado_idx");

                entity.Property(e => e.IdEmpleado).HasColumnName("idEmpleado");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .HasColumnName("apellido");

                entity.Property(e => e.Contrasena)
                    .HasMaxLength(100)
                    .HasColumnName("contrasena");

                entity.Property(e => e.Dni)
                    .HasMaxLength(45)
                    .HasColumnName("dni");

                entity.Property(e => e.IdTipoEmpleado).HasColumnName("idTipoEmpleado");

                entity.Property(e => e.Legajo)
                    .HasMaxLength(45)
                    .HasColumnName("legajo");

                entity.Property(e => e.Mail)
                    .HasMaxLength(45)
                    .HasColumnName("mail");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .HasMaxLength(45)
                    .HasColumnName("telefono");

                entity.Property(e => e.Usuario)
                    .HasMaxLength(100)
                    .HasColumnName("usuario");

                entity.HasOne(d => d.IdTipoEmpleadoNavigation)
                    .WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdTipoEmpleado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Empleado_Tipo_Empleado");
            });

            modelBuilder.Entity<Factura>(entity =>
            {
                entity.HasKey(e => e.IdFactura)
                    .HasName("PRIMARY");

                entity.ToTable("factura");

                entity.HasIndex(e => e.IdCliente, "fk_Factura_Cliente1_idx");

                entity.HasIndex(e => e.IdEmpleado, "fk_Factura_Empleado1_idx");

                entity.HasIndex(e => e.IdFormasPago, "fk_Factura_Formas_Pago1_idx");

                entity.Property(e => e.IdFactura).HasColumnName("idFactura");

                entity.Property(e => e.Fecha).HasColumnName("fecha");

                entity.Property(e => e.IdCliente).HasColumnName("idCliente");

                entity.Property(e => e.IdEmpleado).HasColumnName("idEmpleado");

                entity.Property(e => e.IdFormasPago).HasColumnName("idFormasPago");

                entity.Property(e => e.Total)
                    .HasPrecision(16, 2)
                    .HasColumnName("total");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.Facturas)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Factura_Cliente1");

                entity.HasOne(d => d.IdEmpleadoNavigation)
                    .WithMany(p => p.Facturas)
                    .HasForeignKey(d => d.IdEmpleado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Factura_Empleado1");

                entity.HasOne(d => d.IdFormasPagoNavigation)
                    .WithMany(p => p.Facturas)
                    .HasForeignKey(d => d.IdFormasPago)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Factura_Formas_Pago1");
            });

            modelBuilder.Entity<FormasPago>(entity =>
            {
                entity.HasKey(e => e.IdFormasPago)
                    .HasName("PRIMARY");

                entity.ToTable("formas_pago");

                entity.Property(e => e.IdFormasPago).HasColumnName("idFormasPago");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Marca>(entity =>
            {
                entity.HasKey(e => e.IdMarca)
                    .HasName("PRIMARY");

                entity.ToTable("marca");

                entity.Property(e => e.IdMarca).HasColumnName("idMarca");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(45)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Pedido>(entity =>
            {
                entity.HasKey(e => e.IdPedido)
                    .HasName("PRIMARY");

                entity.ToTable("pedido");

                entity.HasIndex(e => e.IdFactura, "fk_Pedido_Factura1_idx");

                entity.Property(e => e.IdPedido).HasColumnName("idPedido");

                entity.Property(e => e.Fecha).HasMaxLength(45);

                entity.Property(e => e.IdFactura).HasColumnName("idFactura");

                entity.HasOne(d => d.IdFacturaNavigation)
                    .WithMany(p => p.Pedidos)
                    .HasForeignKey(d => d.IdFactura)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Pedido_Factura1");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("PRIMARY");

                entity.ToTable("producto");

                entity.HasIndex(e => e.IdMarca, "fk_Producto_Marca1_idx");

                entity.HasIndex(e => e.IdProveedor, "fk_Producto_Proveedor1_idx");

                entity.HasIndex(e => e.IdTipoProducto, "fk_Producto_Tipo_Producto1_idx");

                entity.Property(e => e.IdProducto).HasColumnName("idProducto");

                entity.Property(e => e.FechaVencimineto).HasColumnName("fecha_vencimineto");

                entity.Property(e => e.IdMarca).HasColumnName("idMarca");

                entity.Property(e => e.IdProveedor).HasColumnName("idProveedor");

                entity.Property(e => e.IdTipoProducto).HasColumnName("idTipoProducto");

                entity.Property(e => e.Marca)
                    .HasMaxLength(50)
                    .HasColumnName("marca");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Tamaño)
                    .HasMaxLength(45)
                    .HasColumnName("tamaño");

                entity.HasOne(d => d.IdMarcaNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.IdMarca)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Producto_Marca1");

                entity.HasOne(d => d.IdProveedorNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.IdProveedor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Producto_Proveedor1");

                entity.HasOne(d => d.IdTipoProductoNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.IdTipoProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Producto_Tipo_Producto1");
            });

            modelBuilder.Entity<Proveedor>(entity =>
            {
                entity.HasKey(e => e.IdProveedor)
                    .HasName("PRIMARY");

                entity.ToTable("proveedor");

                entity.Property(e => e.IdProveedor).HasColumnName("idProveedor");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .HasColumnName("apellido");

                entity.Property(e => e.Dni)
                    .HasMaxLength(45)
                    .HasColumnName("dni");

                entity.Property(e => e.Mail)
                    .HasMaxLength(45)
                    .HasColumnName("mail");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .HasMaxLength(45)
                    .HasColumnName("telefono");
            });

            modelBuilder.Entity<TipoEmpleado>(entity =>
            {
                entity.HasKey(e => e.IdTipoEmpleado)
                    .HasName("PRIMARY");

                entity.ToTable("tipo_empleado");

                entity.Property(e => e.IdTipoEmpleado).HasColumnName("idTipo_Empleado");

                entity.Property(e => e.Tipo)
                    .HasMaxLength(50)
                    .HasColumnName("tipo");
            });

            modelBuilder.Entity<TipoProducto>(entity =>
            {
                entity.HasKey(e => e.IdTipoProducto)
                    .HasName("PRIMARY");

                entity.ToTable("tipo_producto");

                entity.Property(e => e.IdTipoProducto).HasColumnName("idTipoProducto");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .HasColumnName("descripcion");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
