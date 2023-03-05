import React, { useEffect, useState } from 'react'
import ActivitiesList from './ActivitiesList';
import api from '../../api/axiosConfig'

const ActivitiesPage = ({ activities }) => {
    // console.log("activities in home")
    // console.log(activities)
    return (
        <div>
            {activities !== undefined && activities !== [] ?
                <ActivitiesList activities={activities} /> :
                <h2>NO RESULTS FOUND!</h2>
            }
        </div>
    )
}

export default ActivitiesPage
