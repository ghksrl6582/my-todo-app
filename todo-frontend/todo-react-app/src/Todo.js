import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.deleteItem = props.deleteItem;
    }

    deleteEventHandler = () => {
        const thisItem = this.state.item;
        this.deleteItem(thisItem);
    }

    checkboxHandler = () => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem });
    }

    offReadOnlyMode = () => {
        this.setState({ readOnly: false });
    }

    enterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            this.setState({ readOnly: true });
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox
                    checked={item.done}
                    onChange={this.checkboxHandler} />
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly
                        }}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterKeyHandler}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;