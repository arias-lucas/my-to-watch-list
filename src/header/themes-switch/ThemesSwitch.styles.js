import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const ThemesContainer = styled.div`
  position: absolute;
  right: 50px;
  top: 22px;
  @media (max-width: 900px) {
    position: unset;
    display: flex;
    margin: 20px auto;
  }
`;

const IconContainer = styled.span`
  position: relative;
  top: 7px;
  cursor: pointer;
`;

const ThemeToggle = withStyles({
  switchBase: {
    color: grey[300],
    $bar: {
      backgroundColor: grey[100],
    },
    "&$checked": {
      color: grey[800],
    },
    "&$checked + $track": {
      backgroundColor: grey[600],
    },
  },
  checked: {},
  track: {},
})(Switch);

export { ThemesContainer, IconContainer, ThemeToggle };
