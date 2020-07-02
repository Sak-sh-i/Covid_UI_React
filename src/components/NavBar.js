import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
// import LongMenu from "./Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        {/* add floating button */}
        <div>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            style={{ color: "white", backgroundColor: "#00ff00" }}
          >
            <AddIcon />
          </Fab>
        </div>
        {/* Button */}
        <div>
          <Button
            variant="contained"
            // color="primary"
            disableElevation
            style={{ color: "black" }}
          >
            Change City
          </Button>
        </div>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Fab
                  size="small"
                  //   color="secondary"
                  aria-label="menu"
                  style={{ color: "black", backgroundColor: "white" }}
                  {...bindTrigger(popupState)}
                >
                  <MenuIcon />
                </Fab>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Item-1</MenuItem>
                  <MenuItem onClick={popupState.close}>Item-2</MenuItem>
                  <MenuItem onClick={popupState.close}>Item-3</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>
    );
  }
}

export default NavBar;
