import FavoriteIcon from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import { Autocomplete, Chip, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";

const OPTIONS = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
];

const Sidebar = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChipDelete = (chipToDelete) => () => {
    setSelected((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const getOptionLabel = (option) => {
    if (typeof option.label === "string") {
      return option.label;
    }
    return option.toString();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Autocomplete
        getOptionLabel={getOptionLabel}
        freeSolo
        size="small"
        options={OPTIONS}
        value={selected}
        onChange={(event, newValue) => {
          setSelected(newValue ? [...selected, newValue] : selected);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={option}
              label={option}
              onDelete={handleChipDelete(option)}
              {...getTagProps({ index })}
            />
          ))
        }
      />
      <Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Author" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="900" fontSize=".8rem">
          Search
        </Typography>
        <List>
          <RadioGroup
            aria-label="searchType"
            name="searchType"
            value={value}
            onChange={handleChange}
            row
          >
            <ListItem>
              <FormControlLabel
                value="title"
                control={<Radio size="small" />}
                label="Title"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                value="author"
                control={<Radio size="small" />}
                label="Author"
              />
            </ListItem>
          </RadioGroup>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
