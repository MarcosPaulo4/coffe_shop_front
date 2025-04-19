export const iconButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  display: { xs: "none", md: "block" },
  backgroundColor: "rgba(255,255,255,0.8)",
  "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
};

export const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 430,
  flexShrink: 0,
  scrollSnapAlign: "start",
  borderRadius: 2,
  boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.2)",
};

export const cardMediaStyles = {
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)"
  }
}

export const scrollBox = {
   display: "flex",
   overflowX: "auto",
   scrollSnapType: "x mandatory",
   gap: 2,
   py: 4,
   px: 4,
   "&::-webkit-scrollbar": {
     display: "none",
   },
   scrollbarWidth: "none",
}