import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, ClickAwayListener, IconButton, Link, Paper, Popper } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";


export const HamburguerMenu = () => {
  const translate = useTranslations('Navbar')
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen((previousOpen) => !previousOpen);

  };

  const handleClose = () => {
    setIsOpen((previousOpen) => !previousOpen);

  }

  const canBeOpen = isOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;


  return (
    <>
      <IconButton
        edge="start"
        aria-label='menu'
        onClick={handleClick}>
        <MenuOutlinedIcon />
      </IconButton>
      <Popper
        id={id}
        anchorEl={anchorEl}
        open={isOpen}
        disablePortal
        style={{ paddingTop: 13 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper >
            <Box display="flex" flexDirection="column" gap={1} alignItems="center" width={150} >
              <Link underline='none' href="#">{translate('menu')}</Link>
              <Link underline='none' href="#" >{translate('aboutUs')}</Link>
              <Link underline='none' href="#" >{translate('contact')}</Link>
            </Box>
          </Paper>
        </ClickAwayListener>

      </Popper>

    </>
  )
}