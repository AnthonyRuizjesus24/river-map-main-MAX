const API_URL = 'https://etechgroup-001-site2.dtempurl.com/estacion/listardatos';
const POLL_INTERVAL = 60000; // Intervalo de actualización en milisegundos (cada minuto)

// Función para realizar la solicitud de datos hidrológicos
export async function fetchInfoHidro() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}

// Función para iniciar el "polling" de los datos hidrológicos
export function startPolling(setData: (arg0: any) => void) {
  const fetchData = async () => {
    try {
      const data = await fetchInfoHidro();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Llamar fetchData inicialmente al cargar la página
  fetchData();

  // Configurar intervalo de polling para actualizar datos automáticamente
  setInterval(fetchData, POLL_INTERVAL);
}