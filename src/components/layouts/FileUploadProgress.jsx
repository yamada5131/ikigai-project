import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }} className="flex-col">
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 25 }} className="place-self-end mx-3">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
const FileUploadProgress = ({handleCancelUploading, progress}) => {
    
  return (
    <div className=''>
      <div className='flex justify-between px-4 p-2 border-2'>
        <div>filename.txt</div>
        <CancelIcon color='diasbled' className='cursor-pointer' onClick={handleCancelUploading}/>
      </div>
      <LinearProgressWithLabel value={progress} />
    </div>
  )
}

export default FileUploadProgress
