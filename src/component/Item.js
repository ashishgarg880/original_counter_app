import React from "react";
import { Button } from '@mui/material';
import { Stack, Box } from "@mui/material";
import AddCircleOutlineRounded from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRounded from "@mui/icons-material/RemoveCircleOutlineRounded";
import { DeleteRounded } from "@mui/icons-material";
export default class Item extends React.Component{
    render(){
          const styleBox={
                backgroundColor:"#ccc",margin:"2px",padding:"10px",border:"2px solid black",borderRadius:'20px'
          }
        // console.log(this.props.item);
        return (
        
            <div>
                <Stack sx={{m:2}} >
                    <Stack className="" direction="row" spacing={2} justifyContent="center">
                    <Box style={styleBox}>
                          {this.maker()}
                       </Box>
                    <Button variant="contained"
                        className="Increase" sx={{backgroundColor:'#34F1E9'}}
                        onClick={() => this.props.incCount(this.props.item)}
                    >
                        <AddCircleOutlineRounded/>
                    </Button>
                    <Button variant="contained" sx={{
                          backgroundColor: '#6BEE3E'
                    }}
                             onClick={() => this.props.decCount(this.props.item)}
                             disabled={this.props.item.value === 0 ? "disabled" : ""}
                    >
                          <RemoveCircleOutlineRounded/>
                    </Button>
                    <Button variant="contained"
                          className="Delete" sx={{backgroundColor:'red'}}
                          onClick={() => this.props.itemDelete(this.props.item.id)}
                    >
                          <DeleteRounded/>
                    </Button>
                    </Stack>
                </Stack>
            </div>
        )
    }
    maker = () => {
        const { value } = this.props.item;
        return value === 0 ? "Zero" : value;
      };

}