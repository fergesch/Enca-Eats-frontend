// look into https://material-ui.com/components/selects/ for fancier selects

function SearchDropdowns(props) {
  const keys = Object.keys(props.dropdown)
  return (
    // <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Pick your favorite flavor:
    <div>
      {
      keys.map( (key, index) => {
        let all_list = props['dropdown'][key]['all']
        return(
          <select value={props['dropdown'][key]['selected']}
            onChange={props.handleChange}
            name={key}>
              {all_list.map((value, index) => {
                return(
                  <option value={value.alias}>{value.title}</option>)
              })}
          </select>
        )
      })}
      </div>
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>
  )
}

export default SearchDropdowns;