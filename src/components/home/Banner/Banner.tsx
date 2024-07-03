import './styles.css'
import Image from 'next/image';

export const Banner = () => {
  return (
    <main className="relative h-screen">
      <div className="relative h-full">
        <Image
          src="/image/banners/river.webp"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <section className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-3xl text-white font-bold">
              Sistema de Información Hidrológica
            </h1>
            <p className="text-white sm:text-sm">
              Información hidrológica, consultas y descargas
            </p>
          </div>
        </section>
      </div>
      {/* Nuevo contenedor debajo de la imagen */}
      <section className="bg-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.210576563896!2d-73.25705212513684!3d-3.764296696209576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea103f3ff833cd%3A0x68147930a44d9df5!2sSENAMHI%20-%20DZ8%20LORETO!5e0!3m2!1ses-419!2spe!4v1719692703019!5m2!1ses-419!2spe"
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="info-column">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 section-header">
              DIRECCIÓN DEL SENAMHI DZ8
            </h2>
            <p className="text-lg text-gray-700">
              Aquí puedes agregar más información sobre el SENAMHI, como su dirección, horario de atención, servicios ofrecidos, etc.
            </p>
            <p className="text-lg text-gray-700">
              Dirección: Calle Ejemplo 123, Ciudad, País
            </p>
            <p className="text-lg text-gray-700">
              Teléfono: (01) 234-5678
            </p>
            <p className="text-lg text-gray-700">
              Horario de Atención: Lunes a Viernes, 9:00 AM - 5:00 PM
            </p>
          </div>
          
        </div>
      </section>
            <div className="link-container">
              <a
                href="https://www.senamhi.gob.pe/?p=senamhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a la página oficial del SENAMHI
              </a>
            </div>
    </main>
  );
};
