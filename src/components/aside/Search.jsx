import React from 'react'
import classes from './LeftNavbar.module.css';
import { VscClearAll, VscCollapseAll, VscListFlat, VscNewFile, VscRefresh } from "react-icons/vsc";

export const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        <div className={classes.title}>SEARCH</div>
        <div className={classes.icons}>
          <VscRefresh />
          <VscClearAll />
          <VscNewFile />
          <VscListFlat />
          <VscCollapseAll />
        </div>
      </div>
      <div className={classes.searchInputs}>
        <input type="text" placeholder='Search'/>
        <input type="text" placeholder='Replace' className={classes.replace}/>
      </div>
    </div>
  )
}