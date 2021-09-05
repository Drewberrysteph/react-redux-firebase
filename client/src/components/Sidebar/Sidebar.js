/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #ccc',
        height: '100%',
    },
    active: {
        background: '#D3F2E0',
        padding: 15,
        cursor: 'pointer',
    },
    notActive: {
        padding: 15,
        cursor: 'pointer',
    },
    withCustomClass: {
        color: 'green',
    },
    withoutCustomClass: {
        color: 'black',
    },
});

const Sidebar = ({
    masterRecords,
    activeRecord,
    setActiveRecord,
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {masterRecords.map((record, idx) => (
                <Box
                    key={record}
                    className={record === activeRecord ? classes.active
                        : classes.notActive}
                    onClick={() => setActiveRecord(record)}
                    data-testid={`master-record-${idx + 1}`}
                >
                    <Typography variant="subtitle1">{record}</Typography>
                </Box>
            ))}
        </Box>
    );
};

Sidebar.propTypes = {
    masterRecords: PropTypes.array,
    activeRecord: PropTypes.string,
    setActiveRecord: PropTypes.func,
};

Sidebar.defaultProps = {
    masterRecords: [],
    activeRecord: '',
    setActiveRecord: () => {},
};

export default Sidebar;
