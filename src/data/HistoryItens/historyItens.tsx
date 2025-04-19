import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

const historyItems = (translate: (id: string) => string) => [
  {
    icon: <LocalCafeOutlinedIcon sx={{ color: "orange" }} />,
    title: translate("history.qualityTitle"),
    description: translate("history.qualityDescription"),
  },
  {
    icon: <EnergySavingsLeafOutlinedIcon sx={{ color: "orange" }} />,
    title: translate("history.sustainabilityTitle"),
    description: translate("history.sustainabilityDescription"),
  },
  {
    icon: <FavoriteBorderOutlinedIcon sx={{ color: "orange" }} />,
    title: translate("history.serviceTitle"),
    description: translate("history.serviceDescription"),
  },
  {
    icon: <WifiOutlinedIcon sx={{ color: "orange" }} />,
    title: translate("history.connectivityTitle"),
    description: translate("history.connectivityDescription"),
  },
];

export default historyItems;
