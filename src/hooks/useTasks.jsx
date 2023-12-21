import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxios from "./useAxios";

const useTasks = () => {

    const { user, loading } = useAuth();
    const axios = useAxios();
    const { data: tasks = [], isLoading: tasksLoading, refetch } = useQuery({
        queryKey: [ user?.email , 'tasks' ],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://task-management-platform-server-chi.vercel.app/tasks/${user?.email}`);
            return res.data;
        }
    });
    return [tasks, tasksLoading, refetch];
}

export default useTasks