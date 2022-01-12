import React, { useState } from 'react';
import { Checkbox, InputBase, ListItem, ListItemText } from "@material-ui/core";

const Todo = (props) => {

    const [state, setState] = useState({ item: props.item });

    const item = state.item;
    return (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );
}

export default Todo;