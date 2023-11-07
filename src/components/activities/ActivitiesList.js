import React, { useEffect, useState } from 'react'
// import api from '../../api/axiosConfig'
import './Activities.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options = ['All', 'Active', 'Attraction', 'Travel', 'Educational', 'Nightlife'];


const ActivitiesList = ({ activities }) => {
    const [selectedItems, setSelectedItems] = useState();
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    const getEntertainmentByGenre = (index) => {
        try {
            // const response = await api.get(`/api/entertainment/genre?genres=${searchInput}`);
            // setSelectedItems(response.data);
            setOpen(false);
            if (options[index] == 'All') {
                setSelectedItems(activities);
            } else {
                const byGenre = activities.filter((item) => {
                    if (item.genres.includes(options[index].toLowerCase())) {
                        return true;
                    }
                })
                setSelectedItems(byGenre);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setSelectedItems(activities);
    }, [])

    return (
        <>
            <div style={{ margin: "30px" }}>
                <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleToggle}>{`Category`}</Button>
                </ButtonGroup>
                <Popper
                    sx={{
                        zIndex: 1,
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={index}
                                                onClick={(event) => getEntertainmentByGenre(index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
            <div className='containter'>
                <div className='row justify-content-center'>
                    {selectedItems !== undefined && selectedItems.length > 0 ?
                        selectedItems.map((item) => {
                            return (
                                <div className='col-sm-6 col-md-3' key={item}>
                                    <div className='entertainment-det'>
                                        <div className='entertainment-poster' style={{ maxWidth: "250px", maxHeight: "600px", width: "100%", height: "100%" }}>
                                            <a href={item.trailerLink} target='_blank'>
                                                <img src={item.poster} alt="film poster" style={{ maxWidth: "250px", maxHeight: "600px", width: "100%", height: "100%" }} />
                                            </a>
                                        </div>
                                        <div className='entertainment-title'>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className='col-sm-6 col-md-3' style={{ margin: "25px" }}>
                            NO RESULTS FOUND!
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ActivitiesList
