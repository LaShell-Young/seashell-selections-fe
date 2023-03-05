import React, { useEffect, useState } from 'react'
import api from '../../api/axiosConfig'
import './Activities.css'
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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const options = ['Name', 'Type', 'Status', 'Rating'];
const activityTypes = ['active', 'attraction', 'travel', 'educational', 'nightlife'];
const statuses = ['pending', 'in-progress', 'done'];

const ActivitiesList = ({ activities }) => {
    const [selectedItems, setSelectedItems] = useState();
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [searchInput, setSearchInput] = useState("");
    const [alignment, setAlignment] = useState(0);

    const getActivitiesByName = async () => {
        try {
            const response = await api.get(`/api/activities/name/${searchInput}`);

            setSelectedItems(response.data);
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const getActivitiesByType = async () => {
        try {
            const response = await api.get(`/api/activities/type/${searchInput}`);

            setSelectedItems(response.data);
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const getActivitiesByRating = async () => {
        try {
            const response = await api.get(`/api/activities/rate/${searchInput}`);

            setSelectedItems(response.data);
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const getActivitiesByStatus = async () => {
        try {
            const response = await api.get(`/api/activities/status/${searchInput}`);

            setSelectedItems(response.data);
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = () => {
        // call api using user input
        if (searchInput == "") {
            setSelectedItems(activities);
        } else {
            switch (selectedIndex) {
                case 0:
                    getActivitiesByName();
                    break;
                case 1:
                    if (activityTypes.includes(searchInput.toLowerCase())) {
                        getActivitiesByType();
                    }
                    break;
                case 2:
                    if (statuses.includes(searchInput)) {
                        getActivitiesByStatus();
                    }
                    break;
                case 3:
                    if (parseInt(searchInput) > 0 && parseInt(searchInput) <= 5) {
                        getActivitiesByRating();
                    }
                    break;
            }
        }
        // console.log(`You clicked ${options[selectedIndex]} with ${searchInput}`);
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

    const handleChange2 = (event) => {
        // console.log('new alignment')
        // console.log(event.target.value)
        setSearchInput(event.target.value)
        setAlignment(activityTypes.indexOf(event.target.value));
    };

    const setLabel = (index) => {
        switch (index) {
            case 1:
                return 'Ex: active/gaming/educational/';
                break;
            case 2:
                return `Enter ${statuses.join(" or ")}`;
                break;
            case 3:
                return 'Enter a whole number 1-5';
            default:
                return `Enter ${options[index]}`;
        }
    }

    useEffect(() => {
        setSelectedItems(activities);
    }, [])

    return (
        <>
            <div style={{ margin: "30px" }}>
                <div className='search-field-container'>
                    {selectedIndex !== 1 && selectedIndex !== 3 ?
                        <TextField
                            id="outlined-search"
                            label={setLabel(selectedIndex)}
                            type="search"
                            className='search-field'
                            InputLabelProps={{
                                style: { color: 'gold' },
                            }}
                            InputProps={{
                                style: { color: 'gold' }
                            }}
                            onChange={handleChange}
                        />
                        : selectedIndex == 1 ?
                            <ToggleButtonGroup
                                color="info"
                                value={activityTypes[alignment]}
                                exclusive
                                onChange={handleChange2}
                                aria-label="Platform"
                                itemProp={{
                                    style: { color: 'gold' },
                                }}
                            >
                                <ToggleButton style={{ color: "gold" }} value='active'>active</ToggleButton>
                                <ToggleButton style={{ color: "gold" }} value='travel'>travel</ToggleButton>
                                <ToggleButton style={{ color: "gold" }} value='attraction'>attraction</ToggleButton>
                                <ToggleButton style={{ color: "gold" }} value='nightLife'>nightLife</ToggleButton>
                                <ToggleButton style={{ color: "gold" }} value='educational'>educational</ToggleButton>
                            </ToggleButtonGroup> :
                            <TextField
                                id="outlined-number"
                                label={setLabel(selectedIndex)}
                                type="number"
                                className='search-field'
                                InputLabelProps={{
                                    style: { color: 'gold' },
                                }}
                                InputProps={{
                                    style: { color: 'gold' },
                                }}
                                onChange={handleChange}
                            />
                    }
                </div>
                <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleClick}>{`Search by ${options[selectedIndex]}`}</Button>
                    <Button
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
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
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {`Search by ${option}`}
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
                                <div className='col-sm-6 col-md-3'>
                                    {item.name}
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
