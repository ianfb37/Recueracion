import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export default function App() {
  const [guias, setGuias] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadGuias = async () => {
      setIsLoading(true);
      const url = 'https://jsonplaceholder.typicode.com/users';
      
      
      console.log('Petición interceptada hacia: ' + url);

      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': 'Bearer TokenAgility2026'
          }
        });
        const data = await response.json();
        setGuias(data);
      } catch (error) {
        console.error('Error guias:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGuias();
  }, []);

  
}
