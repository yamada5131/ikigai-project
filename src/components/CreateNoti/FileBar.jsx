import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import PropTypes from 'prop-types'
const FileBar = ({handleDeleteFile, title}) => {
  return (
    <div className='flex justify-between border-2 border-blue-400 px-4 py-2 rounded-md'>
      <div>{title} </div>
      <DeleteIcon  sx={{ color: pink[500] }} className='cursor-pointer' onClick={handleDeleteFile}/>
    </div>
  )
}

FileBar.propTypes = {
  handleDeleteFile : PropTypes.func,
  title: PropTypes.string
}
export default FileBar
