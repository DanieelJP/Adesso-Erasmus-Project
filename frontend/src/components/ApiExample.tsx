import React, { useState } from 'react';
import axios from 'axios';

// Mostrar la URL base en consola para depuración
console.log('API URL:', process.env.REACT_APP_API_URL);

const API_URL = process.env.REACT_APP_API_URL || '';

const ApiExample: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Ejemplo de GET
    const handleGet = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/api/ejemplo`);
            setData(response.data);
            setError('');
        } catch (err) {
            setError('Error en la petición GET');
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    // Ejemplo de POST
    const handlePost = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/api/ejemplo`, {
                // Datos de ejemplo
                campo1: 'valor1',
                campo2: 'valor2'
            });
            setData(response.data);
            setError('');
        } catch (err) {
            setError('Error en la petición POST');
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ejemplo de Comunicación con API</h1>
            
            <div className="space-x-4 mb-4">
                <button
                    onClick={handleGet}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    Hacer GET
                </button>
                
                <button
                    onClick={handlePost}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    Hacer POST
                </button>
            </div>

            {loading && <div>Cargando...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {data && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Respuesta:</h2>
                    <pre className="bg-gray-100 p-4 rounded">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ApiExample;
