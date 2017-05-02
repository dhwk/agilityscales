import React from 'react'
import { List, ListItem } from 'material-ui/List'

export default ({ notes }) => (
  <List style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
    {
      Object.keys(notes).reverse().map(key => (
        <ListItem key={key}>
          <div>
            {notes[key].message}
          </div>
          <span style={{fontSize:'small', fontColor:'grey'}}>
            {new Date(notes[key].timestamp).toString()}
          </span>
        </ListItem>
      ))
    }
  </List>
)
