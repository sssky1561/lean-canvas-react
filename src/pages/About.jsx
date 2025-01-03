import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../components/Button';

export default function About() {
  const queryClient = useQueryClient();

  //1
  const { isLoading, error, data } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases/').then(res => res.data),
    initialData: [],
  });

  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: newCanvas =>
      axios.post('http://localhost:8000/canvases/', newCanvas),
    onSuccess: () => {
      queryClient.invalidateQueries(['canvases']);
    },
  });

  const handleCreate = () => {
    createNewCanvas({ title: 'new Canvas' });
  };
  return (
    <div>
      <h2 className="text-3xl">useQuery</h2>
      {isLoading && <p>...LOADING....</p>}
      {error && <p className="text-red-700">{error.message}</p>}
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}

      <h2 className="text-3xl">useMutation</h2>
      {isLoadingCreate && <p>...LOADING..</p>}
      <Button onClick={handleCreate}>등록</Button>
    </div>
  );
}
