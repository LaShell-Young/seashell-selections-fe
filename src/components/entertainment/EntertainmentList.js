import React, { useState } from 'react'
import api from '../../api/axiosConfig'

const EntertainmentList = ({ entertainment, genres }) => {
    const [itemsByGenre, setItemsByGenre] = useState();

    const getEntertainmentByGenre = async (genres) => {
        if (genres.length > 0) {
            try {
                const response = await api.get(`/api/entertainment/genre/genres?=${genresString}`);
                setItemsByGenre(response.data);
            } catch (err) {
                console.log(err);
            }
        }
    }
    // const getEntertainment = async () => {
    //     try {
    //       const response = await api.get("/api/entertainment/all");

    //       setEntertainment(response.data);
    //       console.log(response.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    useEffect(() => {
        getEntertainmentByGenre(genres);
    }, [genres])

    return (
        <div>

        </div>
    )
}

export default EntertainmentList
