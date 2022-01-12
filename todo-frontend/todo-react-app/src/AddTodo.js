import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";

const AddTodo = (props) => {

    const [state, setState] = useState({ item: { title: "" } });
    const add = props.add;

    const onInputChange = (e) => {
        const thisItem = state.item;
        thisItem.title = e.target.value;
        setState({ item: thisItem });
    };

    const onButtonClick = () => {
        add(state.item);
        setState({ item: { title: "" } });
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            onButtonClick();
        }
    }

    const item = state.item;
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add Todo here"
                        value={item.title}
                        fullWidth
                        onChange={onInputChange}
                        onKeyPress={enterKeyEventHandler} />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth color="secondary"
                        variant="outlined"
                        onClick={onButtonClick}>+</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;