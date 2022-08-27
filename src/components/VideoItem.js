import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({video, onVideoSelect}) => {
  return (
  <Grid item xs={8} spacing={1} columns={{xs:4, sm:8, md:12}}>
    <Paper style={{display: 'flex', alignItems: 'center', cursor:'pointer'}} onClick= {() => onVideoSelect(video)} >
        <img style={{marginRight: '20px'}} alt= "thumbnail" src={video.snippet.thumbnails.medium.url}/>
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
    </Paper>
  </Grid>
  )
};
export default VideoItem;