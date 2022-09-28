import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Icon, Paper, Stack, Typography } from '@mui/material';
import * as Unicons from '@iconscout/react-unicons'


export default function Home(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid xs={8} container sx={{height: '70vh' }} spacing={1} mt={7} justifyContent={'space-between'} alignItems={"center"}>
                    <Grid container xs={2} height={"100%"} direction="column" justifyContent={'center'} alignItems={'center'} spacing={4}>
                        <Grid >
                            <div style={styles.cursor}><Unicons.UilLinkedinAlt size="24" color="#576ee0" /></div>
                        </Grid>
                        <Grid >
                            <div style={styles.cursor}> <Unicons.UilGithubAlt size="24" color="#576ee0" /></div>
                        </Grid>
                        <Grid>
                            <div style={styles.cursor}><Unicons.UilTwitterAlt size="24" color="#576ee0" /></div>
                        </Grid>
                    </Grid>
                    <Grid xs={6} height={"100%"}>
                        <Typography color={'#232429'} fontWeight={600} fontSize={'3em'} >Hey I'm <br/> Sithum</Typography>
                        <Typography color={'#71717c'} fontWeight={500} fontSize={'1.25rem'}>Full Stack Developer /<br/> App Developer</Typography>
                        <Typography color={'#9292aa'} fontSize={'1rem'}>I'm a Full stack developer & Mobile App<br/> Developer with over 2+ years of<br/> experience in coding and making <br/>applications.</Typography>
                    </Grid>
                    <Grid xs={4} height={"100%"} bgcolor={"#ff9122"}></Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

const styles = {
    cursor: {
        cursor: 'pointer'
    }
}
