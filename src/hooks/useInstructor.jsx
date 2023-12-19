import { useQuery } from '@tanstack/react-query';


const useInstructor = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() =>{
            const res = await fetch('https://summer-camp-server-beige.vercel.app/student');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
}

export default useInstructor;