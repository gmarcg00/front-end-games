import {Button, Paper} from "@mui/material";


export const Item = (props) => {
    return (
        <Paper>
            <h2>{props.name}</h2>
            <p>{props.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}