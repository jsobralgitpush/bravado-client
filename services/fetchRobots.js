import useSWR from "swr";

export default function fetchRobots(event) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(
        `http://localhost:3000/api/robots`,
        fetcher
    )

    return { robots: data, isLoading: !error && !data, isError: error }
}
