import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
const FileBar = ({handleDeleteFile, title}) => {
  return (
    <div className='flex justify-between border-2 border-blue-400 px-4 py-2 rounded-md'>
      <div>{title} </div>
      <DeleteIcon  sx={{ color: pink[500] }} className='cursor-pointer' onClick={handleDeleteFile}/>
    </div>
  )
}

export default FileBar
