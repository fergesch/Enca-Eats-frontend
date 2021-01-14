// // look into https://material-ui.com/components/selects/ for fancier selects

// function SearchDropdowns(props) {
//   const keys = Object.keys(props.dropdown)
//   return (
//     // <form onSubmit={this.handleSubmit}>
//     //     <label>
//     //       Pick your favorite flavor:
//     <div>
//       {
//       keys.map( (key, index) => {
//         let all_list = props['dropdown'][key]['all']
//         return(
//           <select value={props['dropdown'][key]['selected']}
//             onChange={props.handleChange}
//             name={key}>
//               {all_list.map((value, index) => {
//                 return(
//                   <option value={value.alias}>{value.title}</option>)
//               })}
//           </select>
//         )
//       })}
//       </div>
//       //   </label>
//       //   <input type="submit" value="Submit" />
//       // </form>
//   )
// }

// export default SearchDropdowns;



import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function findTitleFromAlias(array, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i]['alias'] === value) {
          return array[i]['title'];
      }
  }
  return null;
}


function SearchDropdowns(props) {
  const classes = useStyles();

  const keys = Object.keys(props.dropdown);
  
  return (
    <div>
      {keys.map((key, index) => {
        let all_list = props["dropdown"][key]["all"];
        return (
          <FormControl className={classes.formControl}>
            <InputLabel id={key+'label'}>{key}</InputLabel>
            <Select
              labelId={key+'label'}
              id={key}
              name={key}
              multiple
              value={props['dropdown'][key]['selected']}
              onChange={props.handleChange}
              input={<Input />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip
                      className={classes.chip}
                      name={key}
                      key={value}
                      label={findTitleFromAlias(props['dropdown'][key]['all'], value)}
                      // onDelete={props.handleDelete}
                      // known bug for onDelete multiple select
                      // https://github.com/mui-org/material-ui/issues/18953
                    />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {all_list.map((value, index) => {
                let {alias, title}=value;
                return(
                <MenuItem key={alias} value={alias}>
                  <Checkbox checked={props['dropdown'][key]['selected'].indexOf(alias) > -1} />
                  <ListItemText primary={title} />
                </MenuItem>)
              })}
            </Select>
          </FormControl>
        );
      })}
    </div>
  );
}

export default SearchDropdowns;
