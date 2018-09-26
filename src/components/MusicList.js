import React from 'react'
import { withStyles, List, ListItem, ListItemText } from '@material-ui/core'

const styles = theme => ({
  root: {
  }
})

const generate = () => {
    return [{
        name:'Avisa a Ela',
        artist: 'Cavaleiros do Forró'
    },
    {
        name:'Verdadeiro Amor',
        artist: 'Banda Magníficos'
    },
    {
        name:'Morena',
        artist: 'Los Hermanos'
    }].map(({name, artist}, i) => (
        <ListItem button key={i} component="a" href="#simple-list">
          <ListItemText primary={name} secondary={artist}/>
      </ListItem>
    ))
}
const MusicList = ({ classes, text, isLoading, ...props }) => (
  <List dense className={classes.root}>
      {generate()}
  </List>
)

export default withStyles(styles)(MusicList)
