import React, { useEffect, useState } from 'react'
// import api from '../../api/axiosConfig'
import './Entertainment.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TextField from '@mui/material/TextField';

// const options = ['Title', 'Type', 'Genre', 'Rating'];
const options = ['Action', 'Comedy', 'Crime', 'Suspense', 'Sci-fi', 'History',
    'Romance', 'Gay', 'Thriller', 'Drama', 'Western', 'Adventure', 'Fantasy', 'Mystery',
    'Animation', 'Period piece', 'Spanish', 'Horror'];

const EntertainmentList = ({ entertainment }) => {
    // console.log("entertainment in EntertainmentList")
    // console.log(entertainment)
    const [selectedItems, setSelectedItems] = useState();
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchInput, setSearchInput] = useState("");

    const getEntertainmentByGenre = async (option) => {
        try {
            // const response = await api.get(`/api/entertainment/genre?genres=${searchInput}`);
            // setSelectedItems(response.data);
            const byGenre = entertainment.filter((item) => {
                // let genres = searchInput.split(", ");

                // for (let i = 0; i < genres.length; i++) {
                if (item.genres.includes(option.toLowerCase())) {
                    return true;
                }
                // }
            })

            setSelectedItems(byGenre);
        } catch (err) {
            console.log(err);
        }
    }
    const getEntertainmentByTitle = async () => {
        try {
            // const response = await api.get(`/api/entertainment/title/${searchInput}`);
            // setSelectedItems(response.data);

            const byTitle = entertainment.filter((item) => {
                let search = searchInput[0].toUpperCase() + searchInput.substring(1);
                return item.title.includes(search) + item.title.includes(searchInput);
            })

            setSelectedItems(byTitle);
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const getEntertainmentByType = async () => {
        try {
            // const response = await api.get(`/api/entertainment/type/${searchInput}`);
            // setSelectedItems(response.data);
            // console.log(response.data);

            const byType = entertainment.filter((item) => {
                return item.type == searchInput.toLowerCase();
            })

            setSelectedItems(byType);
        } catch (err) {
            console.log(err);
        }
    }
    const getEntertainmentByRating = async () => {
        try {
            // const response = await api.get(`/api/entertainment/rate/${searchInput}`);
            // setSelectedItems(response.data);
            // console.log(response.data);
            const byRating = entertainment.filter((item) => {
                return item.rating == searchInput;
            })

            setSelectedItems(byRating);
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = (option, index) => {
        setSelectedIndex(index);
        setOpen(false);
        // call api using user input
        if (searchInput == "") {
            setSelectedItems(entertainment);
        } else {
            getEntertainmentByGenre(option);
            // switch (selectedIndex) {
            //     case 0:
            //         getEntertainmentByTitle();
            //         break;
            //     case 1:
            //         getEntertainmentByType();
            //         break;
            //     case 2:
            //         getEntertainmentByGenre();
            //         break;
            //     case 3:
            //         if (parseInt(searchInput) > 0 && parseInt(searchInput) <= 5) {
            //             getEntertainmentByRating();
            //         }
            //         break;
            // }
        }
        console.log(`You clicked ${options[selectedIndex]} with ${selectedIndex}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const setLabel = (index) => {
        switch (index) {
            case 1:
                return 'Enter "movie" or "series"';
                break;
            case 2:
                return 'Enter comma separate values';
                break;
            case 3:
                return 'Enter a whole number 1-5';
            default:
                return `Enter ${options[index]}`;
        }
    }

    useEffect(() => {
        setSelectedItems(entertainment);
    }, [])

    // console.log("selectedItems")
    // console.log(selectedItems)
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
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleClick(event, index)}
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
                    {selectedItems !== undefined && selectedItems !== [] ?
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

export default EntertainmentList
