import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } };
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    onButtonClick = () => {
        const item = this.state.item;
        this.add(item);
        this.setState({ item: { title: "" } });
    }

    enterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Add Todo here"
                            fullWidth
                            onChange={this.onInputChange}
                            onKeyPress={this.enterKeyHandler}
                            value={this.state.item.title}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
                            fullWidth
                            color="secondary"
                            variant="outlined"
                            onClick={this.onButtonClick}
                        >+</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;