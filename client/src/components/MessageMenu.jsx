import React from 'react'
import {
  // Select,
  // FormControl,
  // MenuItem,
  // InputLabel,
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Message,
} from "@mui/icons-material";
import FlexBetween from './FlexBetween';

const data = []; 

const MessageMenu = () => {
  
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <FlexBetween>
      <Box
          sx={{
            borderRadius: open ? "10%" : "10%",
            height: '100%',
            bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
            pb: open ? 0 : 0,
          }}
        >
          <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
              px: 1,
              pt: 1.5,
              pb: open ? 0 : 0,
              '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 1 } },
            }}
          >
            <ListItemText
              primary={<Message />}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: 'medium',
                lineHeight: '20px',
                mb: '2px',
              }}
              sx={{ my: 0 }}
            />
          </ListItemButton>
          {open &&
            data.map((friend) => (
              <ListItemButton
                key={friend._id}
                sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {friend.picturePath}
                </ListItemIcon>
                <ListItemText
                  primary={`${friend.firstName} ${friend.lastName}`}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
              </ListItemButton>
            ))}
        </Box>
      </FlexBetween>
      {/* <Message>
        <FormControl>
          <Select id="messageSelect" name="messages" value="messages">
            <MenuItem value="message"></MenuItem>
          </Select>
        </FormControl>
      </Message> */}
    </>
  )
}

export default MessageMenu;