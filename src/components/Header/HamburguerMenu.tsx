import CloseIcon from '@mui/icons-material/Close';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Paper, Popper } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { StyledLink } from '../../styles/componentStyles/StyledComponents.theme';


export const HamburguerMenu = () => {
  const translate = useTranslations('Global')
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen((previousOpen) => !previousOpen);

  };

  const canBeOpen = isOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;


  return (
    <>
      <IconButton
        edge="start"
        aria-label='menu'
        onClick={handleClick}>
        {isOpen ? (
          <CloseIcon />
        ) : <MenuOutlinedIcon />}
      </IconButton>
      <Popper
        id={id}
        anchorEl={anchorEl}
        open={isOpen}
        disablePortal
        style={{ paddingTop: 13 }}
      >
        <Paper >
          <Box display="flex" flexDirection="column" gap={1} alignItems="center" width={200}>
            <StyledLink href="#ourMenu">{translate('menu')}</StyledLink>
            <StyledLink href="#ourHistory" >{translate('aboutUs')}</StyledLink>
            <StyledLink href="#contact" >{translate('contact')}</StyledLink>
          </Box>
        </Paper>

      </Popper>

    </>
  )
}