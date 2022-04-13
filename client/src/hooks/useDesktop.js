import { useMediaQuery, useTheme } from "@material-ui/core";

export default function useDesktop() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return { isDesktop, isMobile };
}
